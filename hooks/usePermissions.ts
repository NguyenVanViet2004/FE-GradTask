import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import * as Notifications from 'expo-notifications'
import { useState } from 'react'

/**
 * Interface defining the structure of the permission status object.
 *
 * @template T The type of the permission status.
 */
interface PermissionStatus<T> {
  granted: boolean
  status: T
}

/**
 * Interface defining the structure of the result returned by the `usePermissions` hook.
 */
interface UseAllPermissionsResult {
  permissions: {
    location: PermissionStatus<Location.PermissionStatus> | null
    camera: PermissionStatus<ImagePicker.PermissionStatus> | null
    cameraRoll: PermissionStatus<ImagePicker.PermissionStatus> | null
    notifications: PermissionStatus<Notifications.PermissionStatus> | null
  }
  errorMsg: string | null
  requestAllPermissions: () => Promise<void>
  requestPermission: (
    type: 'location' | 'camera' | 'cameraRoll' | 'notifications'
  ) => Promise<PermissionStatus<any> | null>
}

/**
 * Function to handle requesting a specific permission and updating the permissions state.
 *
 * @param requestFn A function to request the permission.
 * @param permissionType A string representing the type of the permission being requested.
 * @param setPermissions State setter function to update the permissions state.
 * @param setErrorMsg State setter function to update the error message.
 * @returns A Promise that resolves to an object containing the permission status or null if the request fails.
 */
const requestPermissions = async <T>(
  requestFn: () => Promise<{ granted: boolean, status: T }>,
  permissionType: string,
  setPermissions: React.Dispatch<
  React.SetStateAction<UseAllPermissionsResult['permissions']>
  >,
  setErrorMsg: React.Dispatch<React.SetStateAction<string | null>>
): Promise<PermissionStatus<T> | null> => {
  try {
    const { granted, status } = await requestFn()
    setPermissions((prev) => ({
      ...prev,
      [permissionType]: { granted, status }
    }))
    if (!granted) {
      setErrorMsg(
        `${permissionType.charAt(0).toUpperCase() +
          permissionType.slice(1)} permission denied`
      )
    }
    return { granted, status }
  } catch {
    setErrorMsg(`Failed to request ${permissionType} permission`)
    return null
  }
}

/**
 * Custom hook to manage and request permissions for location, camera, camera roll, and notifications.
 *
 * @returns An object containing the current permissions state, an error message, and functions to request all permissions or a specific permission.
 */
export const usePermissions = (): UseAllPermissionsResult => {
  const [permissions, setPermissions] = useState<
  UseAllPermissionsResult['permissions']
  >({
    camera: null,
    cameraRoll: null,
    location: null,
    notifications: null
  })
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  /**
   * Function to request all permissions at once.
   *
   * @returns A Promise that resolves when all permissions have been requested.
   */
  const requestAllPermissions = async (): Promise<void> => {
    await Promise.all([
      requestPermissions(
        Location.requestForegroundPermissionsAsync,
        'location',
        setPermissions,
        setErrorMsg
      ),
      requestPermissions(
        ImagePicker.requestCameraPermissionsAsync,
        'camera',
        setPermissions,
        setErrorMsg
      ),
      requestPermissions(
        ImagePicker.requestMediaLibraryPermissionsAsync,
        'cameraRoll',
        setPermissions,
        setErrorMsg
      ),
      requestPermissions(
        Notifications.requestPermissionsAsync,
        'notifications',
        setPermissions,
        setErrorMsg
      )
    ])
  }

  /**
   * Function to request a specific permission based on its type.
   *
   * @param type The type of permission to request.
   * @returns A Promise that resolves to an object containing the permission status or null if the request fails.
   */
  const requestPermission = async (
    type: 'location' | 'camera' | 'cameraRoll' | 'notifications'
  ): Promise<PermissionStatus<any> | null> => {
    const permissionMap: Record<
    string,
    () => Promise<{ granted: boolean, status: any }>
    > = {
      camera: ImagePicker.requestCameraPermissionsAsync,
      cameraRoll: ImagePicker.requestMediaLibraryPermissionsAsync,
      location: Location.requestForegroundPermissionsAsync,
      notifications: Notifications.requestPermissionsAsync
    }

    return await requestPermissions(
      permissionMap[type],
      type,
      setPermissions,
      setErrorMsg
    )
  }

  return { errorMsg, permissions, requestAllPermissions, requestPermission }
}
