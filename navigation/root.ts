import { createNavigationContainerRef, StackActions } from "@react-navigation/native";

const navigationRef = createNavigationContainerRef()

function navigate(screen: string, ...params: any) {
    if (navigationRef.isReady()) {
        navigationRef.current?.dispatch(StackActions.push(screen, ...params))
    }
}

function replace(screen: string, ...params: any) {
    if (navigationRef.isReady()) {
        navigationRef.current?.dispatch(StackActions.replace(screen, ...params))
    }
}

export {
    navigate,
    replace,
    navigationRef
}