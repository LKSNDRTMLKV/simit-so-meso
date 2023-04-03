// import { useCallback, useEffect } from "react";
// import { type UseSession } from "~/interfaces/session/Session";



// function useUpdateUserValues( sessionData: UseSession['data'],setValues: React.Dispatch<React.SetStateAction<>> ) {
//   const setValueCallback = useCallback(() => {
//     if (sessionData?.user) {
//       setValues({
//         name: sessionData.user.name,
//         username: sessionData.user.username,
//         image: sessionData.user.image,
//       });
//     }
//   }, [sessionData, setValues]);

//   useEffect(() => {
//     setValueCallback();
//   }, [setValueCallback]);

//   return setValueCallback;
// }

// export default useUpdateUserValues;
