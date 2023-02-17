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
          logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
          full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
          logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
          full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
          logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
          full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
          logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
          full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
          logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
          full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
          logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
          full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
      logo_url:"https://www.leanrawpune.com/assets/img/menu/menu-item-1.png",
      full_image:"https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=",
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
