import { Table, Space ,Button,Col} from 'antd';
import axios from 'axios';
import {useEffect,useState} from 'react'
    
 



function ExercisesList() {

    const [exercises,setExercises]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        axios.get("http://localhost:9000/exercises")
        .then(res=>{
            setExercises(res.data);
            setLoading(false);
        })
        .catch(err=>console.log('(viewExerciseList)(loadExercise)error : ',err));
    }, []);
    
    const deleteExercise=(id)=>{
        axios.delete("http://localhost:9000/exercises/"+id)
        .then(res=>{console.log(res.data)})
        .catch(err=>console.log('(viewExerciseList)(deleteExercise)error : ',err));

        setExercises(exercises.filter(exercise=>exercise._id!==id));
        console.log('id=',id)
    }
    const columns = [
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
          key: 'duration',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Edit</a> | 
              <a onClick={()=>deleteExercise(record._id)}>Delete</a>
            </Space>
          )
        }
      ];

    if(loading){
        return 'Loading ...'
    }else{
        return(
            <div>
                <Col span={22} offset={1}>
                <Button
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                    >
                    Add a row
                </Button>
                <Table columns={columns} dataSource={exercises} />
                </Col>
            </div>
             
        )
    }
       


    }
export default ExercisesList;