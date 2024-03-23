import { useState ,useEffect} from 'react' 
// this custom hook return boolean value acording to the online status
const useInternetStatusHook = ()=>{ 
    const [internetStatus,setInternetStatus] = useState(true);
    
    useEffect(() => {
      window.addEventListener('offline',()=>{
        setInternetStatus(false); 
      });
      window.addEventListener('online',()=>{
        setInternetStatus(true);
      });
      
    }, []);
    return internetStatus;  

}
export default useInternetStatusHook;