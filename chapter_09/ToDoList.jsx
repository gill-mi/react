
import React, {useState, useRef} from "react";
import './ToDoList.css';

function ToDoList(){

    //포커싱
    const focusRef = useRef();
    //수정여부
    const [isEdit, setIsEdit] = useState(false);
    //수정토글
    const toggleIsEdit =() => setIsEdit(!isEdit);
    //수정시 해당 id
    const [toDoId, setToDoId] = useState(0);
    const [inputItem, setInputItem] = useState('');
    const [itemList, setItemList] = useState([
                            {id:'1', value:'리액트 듣기'},
                            {id:'2', value:'점심먹기'},
                            {id:'3', value:'과제하기'}
    ])

    const DeleteToDoList=(id)=>{
        setItemList((itemList) => itemList.filter((itemList)=>itemList.id!==id));
        console.log(itemList);
    }

    const AddToDoList=()=>{
        setItemList((prevItem)=>{
            console.log(itemList.length+1, inputItem);
            return[
                {
                    id:itemList.length+1,
                    value: inputItem,
                },
                ...prevItem,
            ]
        });
        setInputItem('');
    }

    //수정
    const EditToDoList=()=>{
        console.log(toDoId); //수정 해당 id 콘솔 출력
        setItemList(
            //수정 id 일치하는 내용을 입력내용으로
            itemList.map(item =>
                item.id === toDoId ? {...item, value:inputItem}:item
                )
        );

        //수정 토글
        toggleIsEdit();
        setInputItem('');
    }


    return(
        <div className="container1">
            <h1>To-Do List</h1>
            <div className="add-elements">
                <input id="add" value={inputItem} ref = {focusRef} onChange={(event) => setInputItem(event.target.value)} />
                {isEdit ? (<button id="btn" onClick={EditToDoList}>할일 수정</button>)
                        : (<button onClick={AddToDoList}>할일 추가</button>)}
                {/* 수정여부 참이면 버틀 클릭시 수정, 거짓이면 버튼 클릭시 추가 */}
            </div>
            <div id="element-list">
                <ul id="list"> 
                    {itemList.map((item)=>{return <li  key={item.id}>{item.value}
                        <img src="trash.png" onClick={()=>DeleteToDoList(item.id)} alt ="trash"></img>
                        {/* 펜아이콘 클릭시 입력창 포커싱, 해당 id 저장, 수정토글  */}
                        <img src="pen.png" onClick={()=>{focusRef.current.focus(); setToDoId(item.id);toggleIsEdit();}} alt = "edit"></img>
                
                </li>;})}
                </ul>
            </div>

        </div>
    );
}

export default ToDoList;