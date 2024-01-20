import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {

  const [intime, setintime] = useState('');
  const [outtime, setoutime] = useState('');
  const [resTime, setresTime] = useState('');
  const [DisplayMSG, setDisplay] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  // let intime1 = '00:00';
  let intime1;
  let outtime1;
  console.log("test")



  function calFun() {
    debugger
    
    // var theFutureTime = moment().hour('12').minute('44').add(4, 'hours').format("HH:mm");
    let newTime1 = intime.split(":");
    let newTime2 = outtime.split(":");
    console.log('newTime1 :>> ', newTime1); 
    
    let InHours = Number(newTime1[0]);
    let OutHours1 = Number(newTime2[0]);
    let Mins = Number(newTime1[1]);
    let Mins1 = Number(newTime2[1]);
    let REStime = 0;
    let REStimeMin = 0;



    //? ----------HOURS--------------
    if (InHours > 12 && OutHours1 < 12 ){
      REStime = InHours - OutHours1;
    }
    if (InHours < 12 && OutHours1 > 12 ){
      REStime = OutHours1 - InHours;
    }
    if (InHours > 12 && OutHours1 > 12 ){
      if(InHours > OutHours1){
        REStime = InHours - OutHours1;
      }else{
        REStime = OutHours1 - InHours;
      }
    }
    if(InHours < 12 && OutHours1 < 12){
      if (InHours > OutHours1) {
        REStime = InHours - OutHours1;
      } else {
        REStime = OutHours1 - InHours;
      }
    }
    if(InHours === 12 || OutHours1 === 12){
      if(InHours >= OutHours1){
        REStime = InHours - OutHours1;
      }else{
        REStime = OutHours1 - InHours ;

      }
    }
    //? ---------------------------------
   
    //? -------------MINUTES------------

    if (Mins > Mins1) {
      REStimeMin = Mins - Mins1;
    }
    if (Mins < Mins1) {
      REStimeMin = Mins1 - Mins;
    }
   

    //? -------------------------------

    let TM = REStimeMin;

    let OG = REStime;
    let formatTime = `${OG}:${TM}`;
    console.log('formatTime :>> ', formatTime); 
    setresTime(formatTime);
    if(OG > 9){
      setDisplay("Lets GO 🐆 !!!");
      setIsExploding(true);
    }
    else if(OG < 9){
      setDisplay("Ruko jara sabar karo ◄►");
    }
    else{
      setDisplay("Perfect !!")
      setIsExploding(true);
    }

  }




  function OnClear(){
    debugger
    setintime('--:--');
    setoutime('--:--');
    setresTime("");
    setDisplay("");
    setIsExploding(false);
    let RESET = document.querySelectorAll('input');
    RESET[0].value = '--:--';
    RESET[1].value = '--:--';
    intime1 = '--:--';
    outtime1 = '--:--';
  }

  return (
    <div className="App">
      <h1 width = '80%'>Time Calculator ⏰</h1>
      <div class='border'>
        <label>Swipe In   </label>
        <input type='time' placeholder='Entry Time' value={intime1} onChange={(e) => setintime(e.target.value)}></input><br />
        <label>Swipe Out  </label>
        <input type='time' placeholder='Exit Time' value={outtime1} onChange={(e) => setoutime(e.target.value)}></input><br />
        <button onClick={() => calFun(intime, outtime)}>Total Work time</button>&nbsp;
        <button onClick={() => OnClear(intime,outtime)}>Clear</button><br />
        <input placeholder='Calculated Time' value={resTime} ></input>
      </div>
      <div>
        <p>{DisplayMSG}
        <>{isExploding && <ConfettiExplosion width={4000}/>}</>
        </p>
      </div>
    </div>
  );
}

export default App;
