import { useState,useEffect} from 'react';
import { Redirect } from 'react-router';
import  CreateUser  from "./create-user.component";
import axios from 'axios';


import {
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    InputNumber,
   
  } from 'antd';

  

function CreateExercises() {
    
    const [username,setUsername]=useState('');
    const [description,setDescription]=useState('');
    const [duration,setDuration]=useState(0);
    const [date,setDate]=useState(new Date());
    const [users,setUsers]=useState([]);
    const [redirect,setRrdirect]=useState(false);

    const onChangeUserName=(e)=>{
        setUsername(e.target.value);
    }
    const onChangeDescription=(e)=>{
        setDescription(e.target.value);
    }
    const onChangeDuration=(e)=>{
        setDuration(parseInt(e.target.value));
    }
    const onChangeDate=()=>{
        setDate(new Date());
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post('http://localhost:9000/exercises/add',values)
        .then(res=>console.log(res.data))
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
    }
 
    
    useEffect(() => {
        axios.get("http://localhost:9000/users")
        .then(res=>{
            if(res.data.length>0){
                setUsers(res.data.map(user=>user.username));
                setUsername(res.data[0].username);
            }
            else{
                setRrdirect(true);
            }
        })
    }, []);
    
    if (redirect) {
        return <Redirect  to='/user'/>
    }
        return(
            <>
               
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >
                     <h1>Create Exercise</h1>
                    <Form.Item label="Username" name="username">
                        <Select>
                            {users.map(user=>{
                                return(
                                    <Select.Option key={user} >{user}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item >
                    <Form.Item label="Description" name="description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Duration" name="duration">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Date" name="date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    
    


};



export default CreateExercises