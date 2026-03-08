"use client";
import { Layout, Card, List ,Row,Col} from 'antd';
import { mockTasks } from './mockData';
const { Header, Content } = Layout;
import style from './page.module.css';
export default function KanBanPage(){
return(<Layout style={{ background: 'white' }}>
 <Header>KanBan Board</Header>
<div style={{ background: 'white', padding: 0 }}>
    <Row gutter={[16,16]}>
        <Col span={8}>
            <Card title="To Do" >
             <List>
              {mockTasks
                  .filter(task => task.status === 'todo')
                  .map(task => (
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
 
            <List>{mockTasks
                  .filter(task => task.status === 'in-progress')
                  .map(task => (
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
 
            <List>{mockTasks
                  .filter(task => task.status === 'done')
                  .map(task => (
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