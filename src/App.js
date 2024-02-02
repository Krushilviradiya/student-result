import './App.css';
import { useState } from 'react';

function App() {
  let [name, setname] = useState('');
  let [rno, setrno] = useState('');
  let [sub1, setsub1] = useState('');
  let [sub2, setsub2] = useState('');
  let [sub3, setsub3] = useState('');
  let [sub4, setsub4] = useState('');
  let [sub5, setsub5] = useState('');
  let [arr, setarr] = useState([]);
  let [resu,setresu] = useState([]);

  const result = () => {
    let total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
    let per = total / 5;
    let max = Math.max(sub1, sub2, sub3, sub4, sub5)
    let min = Math.min(sub1, sub2, sub3, sub4, sub5)
    let temp = 0,res;
    if (parseInt(sub1) > 35) {
      temp += 1;
    }
    if (parseInt(sub2) > 35) {
      temp += 1;
    }
    if (parseInt(sub3) > 35) {
      temp += 1;
    }
    if (parseInt(sub4) > 35) {
      temp += 1;
    }
    if (parseInt(sub5) > 35) {
      temp += 1;
    }

    if (temp == 3 || temp == 4) {
      res='ATKT';
    }
    else if (temp == 5) {
      res='PASS';
    }
    else {
      res='FAIL';
    }
    if(res=='FAIL'){
      per='**';
    }
    
    setarr([...arr , { Name: name, Rno: rno, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Max: max, Min: min, Res: res }])
    
    setname('')
    setrno('')
    setsub1('')
    setsub2('')
    setsub3('')
    setsub4('')
    setsub5('')
  }

  const pass = () => {
    // let passdata = arr.filter((ele , ind) (   
    // ))
  }
  return (
    <>
      <table className='table1'>
        <tr>
          <td>NAME :-</td>
          <td><input type='text' value={name} onChange={(e) => setname(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>RNO :-</td>
          <td><input type='text' value={rno} onChange={(e) => setrno(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>SUB1 :-</td>
          <td><input type='text' value={sub1} onChange={(e) => setsub1(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>SUB2 :-</td>
          <td><input type='text' value={sub2} onChange={(e) => setsub2(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>SUB3 :-</td>
          <td><input type='text' value={sub3} onChange={(e) => setsub3(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>SUB4 :-</td>
          <td><input type='text' value={sub4} onChange={(e) => setsub4(e.target.value)}></input></td>
        </tr>
        <tr>
          <td>SUB5 :-</td>
          <td><input type='text' value={sub5} onChange={(e) => setsub5(e.target.value)}></input></td>
        </tr>
      </table>
      
      <button onClick={result} className='button'>Click here</button>
      <input type='button' value={"pass"} onClick={pass}></input>
     

      <table border={2} className='table'>
        <tr>
          <th>NAME</th>
          <th>RNO</th>
          <th>SUB 1</th>
          <th>SUB 2</th>
          <th>SUB 3</th>
          <th>SUB 4</th>
          <th>SUB 5 </th>
          <th>TOTAL</th>
          <th>PERCENTAGE</th>
          <th>MAXIMUM</th>
          <th>MINIMUM</th>
          <th>RESULT</th>
        </tr>
        {
          arr.map((ele,ind) => {
            return (
              <>
                <tr style={{ background: ele.Res == "PASS" ? "green" :ele.Res=='ATKT'?'blue':'red'
                }}>
                  <td>{ele.Name}</td>
                  <td>{ele.Rno}</td>
                  <td>{ele.Sub1}</td>
                  <td>{ele.Sub2}</td>
                  <td>{ele.Sub3}</td>
                  <td>{ele.Sub4}</td>
                  <td>{ele.Sub5}</td>
                  <td>{ele.Total}</td>
                  <td>{ele.Per}</td>
                  <td>{ele.Max}</td>
                  <td>{ele.Min}</td>
                  <td>{ele.Res}</td>
                </tr>
              </>
            )
          })
        }
      </table>
    </>
  );
}

export default App;