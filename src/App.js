import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/seed/woon/64',
  'name': '김진수',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 2,
  'image': 'https://picsum.photos/seed/picsum/64',
  'name': '홍길동',
  'birthday': '960305',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
  'id': 3,
  'image': 'https://picsum.photos/seed/helloworld/64',
  'name': '이순신',
  'birthday': '921205',
  'gender': '남자',
  'job': '디자이너'
  }
]

class App extends Component {
  render() {
    return (
      <Paper sx={{
        width: '100%',
        marginTop: 3,
        overflowX: "auto"
      }}>
        <Table sx={{ minWidth: 1080 }}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;