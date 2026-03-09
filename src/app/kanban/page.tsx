"use client";
import { Layout, Card, List , Row , Col , Button} from 'antd';
import { useTaskStore } from '../store/useTaskStore'
const { Header, Content } = Layout;
import style from './page.module.css';
export default function KanBanPage(){
const tasks = useTaskStore((state) => state.tasks);
const deleteTask = useTaskStore((state) => state.deleteTask);
const updateTask = useTaskStore((state) => state.updateTask);
return(<Layout style={{ background: 'white' }}>
 <Header>KanBan Board</Header>
<div style={{ background: 'white', padding: 0 }}>
    <Row gutter={[16,16]}>
        <Col span={8}>
            <Card title="To Do" >
             <List>
              {tasks
                  .filter((task: any) => task.status === 'todo')
                  .map((task: any) => (
                    <List.Item key={task.id}>
                      <div>
                        <strong>{task.title}</strong>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                          {task.description}
                        </p>
                      </div>
                    </List.Item>
                  ))}
             </List>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="In Progress" >
 
            <List>{tasks
                  .filter((task:any) => task.status === 'in-progress')
                  .map((task: any) => (
                    <List.Item key={task.id}>
                      <div>
                        <strong>{task.title}</strong>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                          {task.description}
                        </p>
                      </div>
                    </List.Item>
                  ))}</List>
            </Card>
        </Col>
        <Col span={8}>  
            <Card title="Done" >
 
            <List>{tasks
                  .filter((task: any) => task.status === 'done')
                  .map((task: any) => (
                    <List.Item key={task.id}>
                      <div>
                        <strong>{task.title}</strong>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                          {task.description}
                        </p>
                      </div>
                    </List.Item>
                  ))}</List>
            </Card>
        </Col>
    </Row>
 </div>
</Layout>);
}