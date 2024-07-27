import React, { useContext,useEffect,useState } from "react";
import appContext from "./context";
import { useLocation, useNavigate } from "react-router-dom";

const AppProvider = ({children}) =>{

    const navigate = useNavigate();
    const location = useLocation();
    const [updateModal,setUpdateModal] = useState(false)


    const [userName,setUserName] = useState('')
    const [modal,setModal] = useState(false);
    const [alert,setAlert] = useState(false)
    const [newUserData,setNewUserData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [isLogin,setIsLogin] = useState(false)
    const [userData,setUserData] = useState({
        email:'',
        password:''
    })
    const [newTask,setNewTask] = useState({
        Title:"",
        Description:'',
        Tag:''
    })

    const [fetchedTasks,setFetchedTasks] = useState([])
    



    const alertTime = () => {
        setAlert(true)
        console.log(alert)
        const timeoutId = setTimeout(() => {
            setAlert(false)
            console.log(alert)
        },2000)

        return () => clearTimeout(timeoutId);
    }



    const getNewUserData = (e) => {
        let Name = e.target.name
        let value = e.target.value
        setNewUserData({...newUserData,[Name]:value})
    }



    const getUserData = (e) => {
        let Name = e.target.name
        let value = e.target.value
        setUserData({...userData,[Name]:value})
    }

    const fetchTasks = async() => {
        const incomingTasks = await fetch(`http://localhost:5000/api/task/fetchtasks`,{
            method: 'GET',
            headers: {
                "Content-Type":'application/json',
                'auth-token':localStorage.getItem('auth-token')
            }
        })

        const parsedTasks = await incomingTasks.json();
        setFetchedTasks([...parsedTasks])
    }


    const addNewTask = async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:5000/api/task/addtasks`,{
            method: "POST",
            headers: {
                "Content-Type":'application/json',
                "auth-token":localStorage.getItem('auth-token')
            },
            body: JSON.stringify(newTask)
        })

        fetchTasks();

        setNewTask({
            Title:'',
            Description:'',
            Tag: ''
        })

        setModal(!modal)
    }



    const deleteTask = async (e,noteId) =>{
        e.preventDefault();

        await fetch(`http://localhost:5000/api/task/deletetasks/${noteId}`,{
            method: "DELETE",
            headers: {
                "Content-Type":'application/json',
                "auth-token":localStorage.getItem('auth-token')
            }
        })

        fetchTasks();
    }


    const updateTask = async (e,noteId) => {
        e.preventDefault()

        await fetch(`http://localhost:5000/api/task/updatetasks/${noteId}`,{
            method: "PATCH",
            headers: {
                "Content-Type":'application/json',
                "auth-token":localStorage.getItem('auth-token')
            },
            body:JSON.stringify(newTask)
        })

        fetchTasks();

        setUpdateModal(!updateModal)
    }


    const fetchNewTask = async (e) => {
        let Name = e.target.name
        let value = e.target.value
        setNewTask({...newTask,[Name]:value})

    }




    const fetchUser = async() => {
        const user = await fetch(`http://localhost:5000/api/auth/getuser`,{
                method: 'GET',
                headers: {
                    "Content-Type":'application/json',
                    "auth-token":localStorage.getItem('auth-token')
                }
            })

            const parsedUser = await user.json()
            setUserName(parsedUser.name)
    }



    const register = async (e) => {
        e.preventDefault();
        const user = await fetch(`http://localhost:5000/api/auth/register`,{
            method: "POST",
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(newUserData)
        })
        setNewUserData({
            name:'',
            email:'',
            password:''
        })
        const parsedUser = await user.json()
        console.log(parsedUser.authToken)
        localStorage.setItem('auth-token',parsedUser.authToken)
        fetchUser();
        setIsLogin(true)
        
    }



    const login = async (e) => {
        e.preventDefault()
        const user = await fetch(`http://localhost:5000/api/auth/login`,{
            method: 'POST',
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(userData)
        })

        setUserData({
            email:'',
            password:''
        })

        const parsedUser = await user.json()
        localStorage.setItem('auth-token',parsedUser.authToken)
        fetchUser();
        setIsLogin(true)
    }


    useEffect(() => {
        if (isLogin && (location.pathname === '/login' || location.pathname === '/register')) {
            navigate('/')
            fetchTasks();
        }
    }, [isLogin, navigate, location.pathname]);

    return <appContext.Provider value = {{updateTask,updateModal,setUpdateModal,deleteTask,addNewTask,fetchedTasks,newTask,fetchNewTask,modal,setModal,alertTime,alert,getNewUserData,getUserData,register,newUserData,userData,login,isLogin,userName,setNewTask}}>
            {children}
            </appContext.Provider>
    
}

const useGlobalContext = () => {
    return useContext(appContext)
}

export {appContext,AppProvider,useGlobalContext};