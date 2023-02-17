import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function MenuItems() {
  useEffect(() => {
    AOS.init();
  }, [])

  const avaiableOption = {
    economy:[
      {
        name:"Economy A",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Economy B",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/3.png?alt=media&token=e440e72f-fd6e-497b-b3aa-7d0607df0786",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/3.png?alt=media&token=e440e72f-fd6e-497b-b3aa-7d0607df0786",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Economy C",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/4.png?alt=media&token=c03fe6d4-b535-4a2d-aeb1-d625587f7048",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/4.png?alt=media&token=c03fe6d4-b535-4a2d-aeb1-d625587f7048",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Economy D",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/5.png?alt=media&token=f08eae43-9a68-460c-8715-7be26d17b787",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/5.png?alt=media&token=f08eae43-9a68-460c-8715-7be26d17b787",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Economy E",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/11.png?alt=media&token=10f04782-fa5c-4439-b107-0c3dc37cce83",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/11.png?alt=media&token=10f04782-fa5c-4439-b107-0c3dc37cce83",
          tags:["Cake,Candal,Decorations"]
      },
      {
        name:"Economy F",
        items:['Cake',
          '10 pcs silver baloon',
          '10 pcs golden matelic',
          '2 pcs Golden Heart',
          '2 pcs Golden Start',
          '1 set 13 pcs Happy Birthday',
          '1 pcs Ege represents',
          '1 pcs knife',
          '5 pcs candal',
          '2 pcs chines light',
          '1 battery',
          '2 pcs vapor light',
          '1 pcs camera',
          '1 Birthday cap'],
          price:"Rs. 699",
          logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/12.png?alt=media&token=a919afc0-18ed-4266-8c0b-c168fe6af536",
          full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/12.png?alt=media&token=a919afc0-18ed-4266-8c0b-c168fe6af536",
          tags:["Cake,Candal,Decorations"]
      }
    ],
    premium:[
      {
      name:"Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/16.png?alt=media&token=f4a96372-27c5-44a6-a6ef-982c78e53bb8",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/16.png?alt=media&token=f4a96372-27c5-44a6-a6ef-982c78e53bb8",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/1.png?alt=media&token=cdcd102c-d3ba-47fe-9886-c3662179a22d",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/15.png?alt=media&token=bcfb701b-d31a-4322-b6ed-83b527f9406b",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/15.png?alt=media&token=bcfb701b-d31a-4322-b6ed-83b527f9406b",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/13.png?alt=media&token=12eb0148-1449-46ea-bcbb-8491e1db76bd",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/13.png?alt=media&token=12eb0148-1449-46ea-bcbb-8491e1db76bd",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/21.jpg?alt=media&token=b911147f-6896-4874-8822-d060dc251c2f",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/21.jpg?alt=media&token=b911147f-6896-4874-8822-d060dc251c2f",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/17.png?alt=media&token=58dba05e-c4c1-4a04-bed1-5994da330062",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/17.png?alt=media&token=58dba05e-c4c1-4a04-bed1-5994da330062",
      tags:["Cake,Candal,Decorations"]
    }
    ],
    extra_premium:[
      {
      name:"Ex Premium A",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Ex Premium B",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/29.png?alt=media&token=a4b0290b-7075-4eb7-ba64-a787be4ea622",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/29.png?alt=media&token=a4b0290b-7075-4eb7-ba64-a787be4ea622",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Ex Premium C",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/28.png?alt=media&token=6f32909b-fdec-4ef1-b165-10e6cdcf76b0",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/28.png?alt=media&token=6f32909b-fdec-4ef1-b165-10e6cdcf76b0",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Ex Premium D",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/27.png?alt=media&token=965db1f1-354d-459d-bc28-83a3129b62f2",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/27.png?alt=media&token=965db1f1-354d-459d-bc28-83a3129b62f2",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Ex Premium E",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/26.jpg?alt=media&token=b2b9b41a-4a00-497f-b6be-6e7f4f5674c4",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/26.jpg?alt=media&token=b2b9b41a-4a00-497f-b6be-6e7f4f5674c4",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:"Ex Premium F",
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/25.jpg?alt=media&token=a5465671-cdea-47af-96ae-03dc9e6b5209",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/25.jpg?alt=media&token=a5465671-cdea-47af-96ae-03dc9e6b5209",
      tags:["Cake,Candal,Decorations"]
    }
    ],
    luxurious:[
      {
      name:'Lux A',
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/22.jpg?alt=media&token=b88e9548-a454-4110-84fa-257fc99dc152",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/22.jpg?alt=media&token=b88e9548-a454-4110-84fa-257fc99dc152",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:'Lux B',
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/21.jpg?alt=media&token=b911147f-6896-4874-8822-d060dc251c2f",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/21.jpg?alt=media&token=b911147f-6896-4874-8822-d060dc251c2f",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:'Lux C',
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/31.png?alt=media&token=55824be0-d63f-4c33-8012-96cf0e669a3d",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/31.png?alt=media&token=55824be0-d63f-4c33-8012-96cf0e669a3d",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:'Lux D',
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/32.png?alt=media&token=f135b5c3-be40-41e3-b2a7-73aa9ab22912",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/32.png?alt=media&token=f135b5c3-be40-41e3-b2a7-73aa9ab22912",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:'Lux E',
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/34.png?alt=media&token=f66278ce-9033-465e-8928-36cd97ea3add",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/34.png?alt=media&token=f66278ce-9033-465e-8928-36cd97ea3add",
      tags:["Cake,Candal,Decorations"]
    },
    {
      name:'Lux F',
      items:['Cake',
      '20 pcs silver baloon',
      '20 pcs golden matelic',
      '2 pcs Golden Heart',
      '2 pcs Golden Start',
      '1 set 13 pcs Happy Birthday',
      '1 pcs Ege represents',
      '1 pcs knife',
      '5 pcs candal',
      '2 pcs chines light',
      '1 battery',
      '2 pcs light',
      '1 pcs camera + video ',
      '2 wall parda',
      '5 pcs confetti baloon',
      '1 Birthday cap mukut design'],
      price:"Rs. 699",
      logo_url:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/36.png?alt=media&token=6c5a37f5-017b-4987-b42a-2312fe407855",
      full_image:"https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/36.png?alt=media&token=6c5a37f5-017b-4987-b42a-2312fe407855",
      tags:["Cake,Candal,Decorations"]
    }
    ]
  }


  return (
    <section id="menu" className="menu">
    <div className="container" data-aos="fade-up" >

      <div className="section-header">
        <h2>Our Plans</h2>
        <p>Select from <span>our Birthday Basket</span></p>
      </div>

      <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200" >

        <li className="nav-item">
          <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
            <h4>Economy</h4>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
            <h4>Premium</h4>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
            <h4>Extra Premium</h4>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
            <h4>Luxurious</h4>
          </a>
        </li>

      </ul>

      <div className="tab-content" data-aos="fade-up" data-aos-delay="300" >

        <div className="tab-pane fade active show" id="menu-starters">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Economy</h3>
          </div>

          <div className="row gy-5">
            {avaiableOption['economy'].map((item) =>{
            return <div className="col-lg-4 menu-item">
              <Link to="details" state={{check:"working",item:item}}  className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
              <p className="price">
                {item.price}
              </p>
            </div>})}
          </div>
        </div>

        <div className="tab-pane fade" id="menu-breakfast">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Premium</h3>
          </div>

          <div className="row gy-5">

            {avaiableOption['premium'].map((item) => { return <div className="col-lg-4 menu-item">
              <Link to="details" state={{check:"working",item:item}} className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
              <p className="price">
                {item.price}
              </p>
            </div>})}
          </div>
        </div>

        <div className="tab-pane fade" id="menu-lunch">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Extra Premium</h3>
          </div>

          <div className="row gy-5">

            {avaiableOption['extra_premium'].map((item) => { return <div className="col-lg-4 menu-item">
              <Link to="details" state={{check:"working",item:item}} className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
              <p className="price">
                {item.price}
              </p>
            </div>})}
          </div>
        </div>

        <div className="tab-pane fade" id="menu-dinner">

          <div className="tab-header text-center">
            <p>Plan</p>
            <h3>Custom</h3>
          </div>

          <div className="row gy-5">

            {avaiableOption['luxurious'].map((item) => { return <div className="col-lg-4 menu-item">
              <Link to="details" state={{check:"working",item:item}} className="glightbox"><img src={item.logo_url} className="menu-img img-fluid" alt="" /></Link>
              <h4>{item.name}</h4>
              <p className="ingredients">
                {item.tags[0]}
              </p>
              <p className="price">
                {item.price}
              </p>
            </div>})}
          </div>
        </div>

      </div>

    </div>
  </section>

  )
}
