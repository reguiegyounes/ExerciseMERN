import { Table, Space ,Button,Col} from 'antd';
import axios from 'axios';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
    
 



function ExercisesList() {

    const [exercises,setExercises]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        axios.get("/exercises")
        .then(res=>{
            const results= res.data.map(row => ({
                key: row._id,
                username: row.username,
                description: row.description,
                duration: row.duration,
                date: row.date
              }))
              setExercises(results);
              setLoading(false);
        })
        .catch(err=>console.log('(viewExerciseList)(loadExercise)error : ',err));

        
    }, []);

    const deleteExercise=(id)=>{
        axios.delete("/exercises/"+id)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>console.log('(viewExerciseList)(deleteExercise)error : ',err));
        setExercises(exercises.filter(exercise=>exercise.key!==id));
    }
    const columns = [
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
          fixed: 'left',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
          key: 'duration'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
          title: 'Action',
          key: 'action',
          fixed: 'right',
          
          render: (text, record) => (
            <Space size="middle">
              <Link 
                to={{
                    pathname:'/edit/'+record.key,
                    exercise:record
                  }}
                  //to={'/edit/'+record.key}
                  >Edit
              </Link> | 
              <a onClick={()=>deleteExercise(record.key)}>Delete</a>
            </Space>
          )
        }
      ];

    if(loading){
        return (
            <Col span={22} offset={1}>
                <h1>Loading ...</h1>
            </Col>
        )
    }else{
        return(
            <div>
                <Col span={22} offset={1}>
                    <h1>Exercises list</h1>
                </Col>
                <Col span={22} offset={1}>
                    <Table columns={columns} dataSource={exercises} scroll={{ x: 500 }} />
                </Col>
            </div>
             
        )
    }
       


    }
export default ExercisesList;


