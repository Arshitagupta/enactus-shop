import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users,setUsers]= useState([])
  useEffect(()=>{
    const getUsers= async()=>{
        try{
        const res=await userRequest.get ("users/?new=true")
        setUsers(res.data)
        console.log(users)

      }catch(err){
        console.log(err)
      }
    }
    getUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          users.map(user=>(
            
            <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img||"https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU="}
              alt=""
              className="widgetSmImg"
              />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
            ))
          }
      </ul>
    </div>
  );
}
