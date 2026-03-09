"use client";
import { useState } from 'react'
import { Layout, Card, List, Row, Col, Button, Input, Space} from 'antd';
import { useTaskStore } from '../store/useTaskStore'
const { Header, Content } = Layout;
function TaskColumn({ 
  title, 
  status, 
  tasks, 
  onDelete, 
  onAdd 
}: { 
  title: string; 
  status: string; 
  tasks: any[]; 
  onDelete: (id: number) => void;
  onAdd: (title: string, desc: string) => void;
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
const handleSubmit = () => {
    if (!newTitle.trim()) return;
    onAdd(newTitle, newDesc);
    setNewTitle('');
    setNewDesc('');
    setIsAdding(false); // 添加完关闭输入框
  };
  return (
    <Col span={8}>
      <Card title={title} style={{ minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
        {/* 1. 任务列表区域 */}
        <List
          style={{ flex: 1 }}
          dataSource={tasks.filter((t) => t.status === status)}
          renderItem={(task: any) => (
            <List.Item
              actions={[
                <Button 
                  key="del" 
                  type="link" 
                  danger 
                  size="small" 
                  onClick={() => onDelete(task.id)}
                >
                  删除
                </Button>
              ]}
            >
              <div style={{ width: '100%' }}>
                <strong>{task.title}</strong>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#666' }}>
                  {task.description}
                </p>
              </div>
            </List.Item>
          )}
        />

        {/* 2. 添加任务区域 */}
        <div style={{ marginTop: '16px', borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
          {isAdding ? (
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input 
                placeholder="任务标题" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
                autoFocus
              />
              <Input 
                placeholder="任务描述 (可选)" 
                value={newDesc} 
                onChange={(e) => setNewDesc(e.target.value)} 
              />
              <Space>
                <Button type="primary" size="small" onClick={handleSubmit}>确定</Button>
                <Button size="small" onClick={() => setIsAdding(false)}>取消</Button>
              </Space>
            </Space>
          ) : (
            <Button 
              type="dashed" 
              block 
              icon={<span>+</span>} 
              onClick={() => setIsAdding(true)}
            >
              添加卡片
            </Button>
          )}
        </div>
      </Card>
    </Col>
  );
}
export default function KanBanPage(){
const tasks = useTaskStore((state) => state.tasks);
const addTask = useTaskStore((state) => state.addTask);
const deleteTask = useTaskStore((state) => state.deleteTask);
const updateTask = useTaskStore((state) => state.updateTask);
const handleAddTask = (status: string) => (title: string, description: string) => {
    addTask({
      id: Date.now(),
      title,
      description,
      status, // 👈 关键：传入当前列的状态
    });
  };
return(<Layout style={{ background: '#f0f2f5', minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: 'white', margin: 0 }}>My Trello Clone</h1>
      </Header>
      <Content style={{ padding: '24px' }}>
    <Row gutter={[16,16]}>
        <TaskColumn 
            title="To Do" 
            status="todo" 
            tasks={tasks} 
            onDelete={deleteTask}
            onAdd={handleAddTask('todo')} 
          />

          {/* --- In Progress 列 --- */}
          <TaskColumn 
            title="In Progress" 
            status="in-progress" 
            tasks={tasks} 
            onDelete={deleteTask}
            onAdd={handleAddTask('in-progress')} 
          />

          {/* --- Done 列 --- */}
          <TaskColumn 
            title="Done" 
            status="done" 
            tasks={tasks} 
            onDelete={deleteTask}
            onAdd={handleAddTask('done')} 
          />
    </Row>
    </Content>
</Layout>);
}