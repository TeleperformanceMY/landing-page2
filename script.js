@import url('https://fonts.cdnfonts.com/css/handwriting');
@import url('https://fonts.cdnfonts.com/css/kg-first-time-in-forever');
@import url('https://fonts.cdnfonts.com/css/lumie');
@import url('https://fonts.cdnfonts.com/css/simple-and-minimalis');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-image: url('depositphoto-modified.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    box-sizing: border-box;
    padding: 15px 0;
   flex-shrink: 0;
  
  position: auto; /* Stick to the bottom */
  top: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
      top: 0;
    width: auto;
    height: auto; /* Adjusted height */
    z-index: 10;
    padding: 20px 0; /* Added padding top and bottom */
}
 
 
.company-description {
    font-family: 'KG First Time In Forever', sans-serif;
    font-size: 32px;
    color: #EEE0EC;
    text-align: center;
}

.company-description b {
    font-weight: bold;
}

.company-description .highlight {
    font-family: 'Lumie', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: rgba(204, 0, 79, 0.8);
    text-shadow: 
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 151px #bc13fe;
}

.logo {
    max-width: 150px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.video-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1; /* Let this section grow to fill the remaining space */
    padding: 50px 0; /* Added padding top and bottom */
}

.footer {
    box-sizing: border-box;
     padding: 15px 0;
    flex-shrink: 0;
    position: auto; /* Stick to the bottom */
    bottom: 0;
    width: 100%;
     background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    z-index: 10;
    padding: 20px 0; /* Added padding top and bottom */
}

.footer .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.button-container {
    margin-bottom: 20px; /* Increased space between buttons and footer text */
}

.button {
    display: inline-block;
    background-color: transparent;
    color: #fff;
    padding: 10px 20px;
    margin: 0 10px;
    font-family: 'KG First Time In Forever', sans-serif;

    border: 1px solid #fff;
    border-radius: 50px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.button:hover {
    background-color: rgba(204, 0, 79, 0.8);
    color: #0a0a0a;
}

.except {
    font-family: 'KG First Time In Forever', sans-serif;
    font-size: 32px;
    color: #EEE0EC;
    text-align: center;
}

.except .highlight {
    font-family: 'Lumie', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: rgba(204, 0, 79, 0.8);
    text-shadow: 
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 151px #bc13fe;
}


.inverted-2,
.inverted-3,
.inverted-4,
.inverted-5,
.inverted-6,
.inverted-7,
.inverted-8,
.d-1 {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    display: inline-block;
    padding: 5px 10px;
    margin: 5px;
    color: #fff;
    border-radius: 5px;
}

.hover-4 {
    border: 8px solid;
    border-image: repeating-linear-gradient(135deg, #F8CA00 0 10px, #E97F02 0 20px, #BD1550 0 30px) 8;
    -webkit-mask: conic-gradient(from 180deg at top 8px right 8px, #0000 90deg, #000 0) var(--_i, 200%) 0 / 200% var(--_i, 8px) border-box no-repeat, conic-gradient(at bottom 8px left 8px, #0000 90deg, #000 0) 0 var(--_i, 200%) / var(--_i, 8px) 200% border-box no-repeat, linear-gradient(#000 0 0) padding-box no-repeat;
    transition: .2s, -webkit-mask-position .3s .3s;
    position: fixed;
    bottom: 180px;
    left: 450px;
    left: 23%;
    transform: translate(-40%, -50%) rotate(350deg);
    font-family: 'KG First Time In Forever', sans-serif;
    font-size: 46px;
}

  
  .hover-4:hover {
    --_i: 100%;
    color: rgba(204, 0, 79, 0.8);
    transition: .3s, -webkit-mask-size .3s .3s;
  }
  
.inverted-2 {
    padding: 10px;
    background: conic-gradient(from 135deg at top, rgba(204, 0, 79, 0.8) 90deg, #000 0), conic-gradient(from -45deg at bottom, rgba(204, 0, 79, 0.8) 90deg, #000 0), conic-gradient(from 135deg at top, rgba(204, 0, 79, 0.8) 90deg, #0000 0), conic-gradient(from -45deg at bottom, rgba(204, 0, 79, 0.8) 90deg, #0000 0), #000;
    -webkit-background-clip: text, text, padding-box, padding-box, text;
    background-clip: text, text, padding-box, padding-box, text;
    background-size: 100% 50%;
    background-position: 50% -100%, 50% 200%;
    background-repeat: repeat-x;
    transition: 0.4s linear, background-position 0.3s 0.5s;
    position: fixed;
    top: 6%;
    right: 63%;
    transform: translate(-50%, -50%) rotate(350deg);
    font-family: 'Your Handwritten Font', cursive;
    font-size: xx-large;
}
  .inverted-2:hover {
    background-position: 50% 0,50% 100%;
    background-size: 10% 50%;
    transition: 0.3s,background-size 0.4s 0.3s linear;
  }

  .inverted-3 {
      padding: 0 10px;
      line-height: 1em;
      background: linear-gradient(#fff 0 0), linear-gradient(rgba(204, 0, 79, 0.8) 0 0), #000;
      -webkit-background-clip: text, padding-box;
      background-clip: text, padding-box;
      background-size: 100% 50%;
      background-position: 50% -100%, 50% 200%;
      background-repeat: no-repeat;
      transition: 0.4s linear, background-position 0.3s 0.5s;
      position: fixed;
      top: 15%;
      right: 3%;
      transform: translate(-50%, -50%) rotate(350deg);
      font-family: 'Your Handwritten Font', cursive;
      font-size: xx-large;
  }
  .inverted-3:hover {
    background-position: 0 100%;
    box-shadow: 0 0.5em 0 0 #000;
  }
  .inverted-4 {
      padding: 0 10px;
      line-height: 1.4em;
      background: linear-gradient(#fff 0 0), linear-gradient(rgba(204, 0, 79, 0.8) 0 0), #000;
      -webkit-background-clip: text, padding-box;
      background-clip: text, padding-box;
      clip-path: polygon(-100vmax 0, 100% 0, 100% calc(100% + 0.7em), -100vmax calc(100% + 0.7em));
      transition: 0.4s, box-shadow 0.3s 0.4s, background-position 0.3s 0.4s;
      background-size: 100% 50%;
      background-position: 50% -100%, 50% 200%;
      background-repeat: repeat-x;
      position: fixed;
      top: 46%;
      right: -5%;
      transform: translate(-50%, -50%) rotate(337deg);
      font-family: 'Your Handwritten Font', cursive;
      font-size: xx-large;
  }
  
  .inverted-4:hover {
    background-position: 0 100%;
    background-size: 100% 100%;
    box-shadow: 0 0.7em 0 0 #000;
    clip-path: polygon(-100vmax 0,100% 0,100% 100%,-100vmax 100%);
    transition: 0.4s, clip-path 0.3s 0.4s,background-size 0.3s 0.4s;
  }
  
  .inverted-5 {
    padding: 10px;
    background:
      radial-gradient(100% 100% at top left,#fff 98%,#000) ,
      radial-gradient(100% 100% at bottom right,#fff 98%,#000) ,
      radial-gradient(100% 100% at top left,#000 98%,#0000) ,
      radial-gradient(100% 100% at bottom right,#000 98%,#0000) ,
      #000;
    -webkit-background-clip: text,text,padding-box,padding-box,text;
            background-clip: text,text,padding-box,padding-box,text;
    background-size: 0% 0%;
    background-position: top left, bottom right;
    background-repeat: no-repeat;
    transition: 0.5s;

    position: fixed;
    top: 40%;
    right:  5%;
    transform: translate(-25%,-25%)rotate(-30deg);
    font-family: 'Your Handwritten Font', cursive;
    font-size:xx-large;
  }
  .inverted-5:hover {
    background-size: 50% 100%;
  }
  
.inverted-6 
{
    background: conic-gradient(#fff 0 90deg, #fff0 0) bottom left, conic-gradient(rgba(204, 0, 79, 0.8) 0 90deg, #fff0 0) bottom left, conic-gradient(from 90deg, #fff 0 90deg, #fff0 0) top left, conic-gradient(from 90deg, rgba(204, 0, 79, 0.8) 0 90deg, #fff0 0) top left, conic-gradient(from 180deg, #fff 0 90deg, #fff0 0) top right, conic-gradient(from 180deg, rgba(204, 0, 79, 0.8) 0 90deg, #fff0 0) top right, conic-gradient(from -90deg, #fff 0 90deg, #fff0 0) bottom right, conic-gradient(from -90deg, rgba(204, 0, 79, 0.8) 0 90deg, #fff0 0) bottom right, #000;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    background-size: 202% 202%;
    transition: 0.5s;
    background-position: top;
    background-repeat: repeat-x;
    position: fixed;
    top: 23%;
    left: 15%;
    transform: translate(-50%, -50%) rotate(-29deg);
    font-family: 'Your Handwritten Font', cursive;
    font-size: xx-large;
}
   
  .inverted-6:hover {  
    background-position: center;
    color: rgba(204, 0, 79, 0.8);
   }
    
  
  .inverted-7{
    background:
      radial-gradient(circle 30px at 50% 75%, #fff 95%, #000),
      radial-gradient(circle 30px at 50% 75%, #000 95%, #0000),
      #000;
    -webkit-background-clip: text,padding-box,text;
            background-clip: text,padding-box,text;
    background-size: 100% 200%;
    background-position: top;
    background-repeat: repeat-x;
    transition: 0.3s,background-position 0.3s 0.3s;
     position: fixed;
    top: 65%;
    right: 20%;
    transform: translate(-50%,-50%)rotate(30deg);
    font-family: 'Your Handwritten Font', cursive;
    font-size:xx-large;
  }
  .inverted-7:hover {  
    background-size: 15% 200%;
    background-position: bottom;

    transition: 0.3s,background-size 0.3s 0.3s;
    box-shadow: 0 0.5em 0 0 #fff;
    color: rgba(204, 0, 79, 0.8);
   }
   .inverted-8 {
    background:
      linear-gradient( 90deg, #000  50%, #fff 0),
      linear-gradient(-90deg, #000  50%, #fff 0),
      linear-gradient( 90deg, #0000 50%, #000 0),
      linear-gradient(-90deg, #0000 50%, #000 0);
    background-repeat: no-repeat;
    background-size: 200% 51%;
    background-position: top left, bottom right;
    -webkit-background-clip: text, text, padding-box, padding-box;
            background-clip: text, text, padding-box, padding-box;
    transition: 0.8s;
    position : fixed;
    top: 65%;
    right:  5%;
    transform: translate(-50%,-50%)rotate(30deg);
    font-family: 'Your Handwritten Font', cursive;
    font-size:xx-large;
  }
  
  .inverted-8:hover {
    
  --c: #1095c1; /* the color */
  --s: .15em;
  
  line-height:1.1em;
  padding-bottom: calc(2.1*var(--s));
  background: 
    conic-gradient(from 135deg at top,var(--c) 90deg,#0000 0) 
      left 0 bottom var(--s)/calc(2*var(--s)) var(--s) repeat-x,
    conic-gradient(from -45deg at bottom,var(--c) 90deg,#0000 0) 
      left var(--s) bottom 0/calc(2*var(--s)) var(--s) repeat-x;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0) 0/var(--_p,0%) padding-box no-repeat;
  transition: .5s;
  
  --_p: 100%;
  color: var(--c);
  }

  .d-1 {
    --c: #1095c1; /* the color */
    --b: .1em;    /* border length*/
    --d: 20px;    /* the cube depth */
    
    --_s: calc(var(--d) + var(--b));
    
    color: var(--c);
    border: solid #0000;
    border-width: var(--b) var(--b) var(--_s) var(--_s);
    background:
      conic-gradient(at left var(--d)  bottom var(--d),
        #0000 90deg, rgb(255 255 255 /0.3) 0 225deg,rgb(255 255 255 /0.6) 0) border-box,
      conic-gradient(at left var(--_s) bottom var(--_s),
        #0000 90deg,var(--c) 0) 0 100%/calc(100% - var(--b)) calc(100% - var(--b))  border-box;
    transform: translate(calc(var(--d)/-1),var(--d));
    clip-path: 
      polygon(
       var(--d) 0%, 
       var(--d) 0%, 
       100% 0%, 
       100% calc(100% - var(--d)),
       100% calc(100% - var(--d)),
       var(--d) calc(100% - var(--d))
      );
    transition: 0.5s;

    background-size: 100% 50%;
    background-position: 50% -100%,50% 200%;
    background-repeat: repeat-x;
     position: fixed;
    top: 50%;
left:15%;
    transform: translate(-50%,-50%)rotate(-45deg);
    font-family: 'Your Handwritten Font', cursive;
    font-size:xx-large;
  }
  .d-1:hover {
    transform: translate(0,0);
    clip-path: 
      polygon(
       0% var(--d), 
       var(--d) 0%, 
       100% 0%, 
       100% calc(100% - var(--d)), 
       calc(100% - var(--d)) 100%, 
       0% 100%
     );
     background-size: 15% 200%;
     background-position: bottom;
     transition: 0.3s,background-size 0.3s 0.3s;
  }
  

@media only screen and (max-width: 768px) {
     /* Header */
  .header {
    padding: 0px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    position: relative;
    width: 150%; /* Make the header fill the entire width */

  }


  .logo {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 40px;
    margin-right: 5px;
  }
  .company-description {
    font-size: 12px;
  }

  /* Footer */
  .footer {
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    color: #fff;
    padding: 20px;
    text-align: center;
  }
    .company-description {
        font-size: 24px;
    }

    .except {
        font-size: 24px;
    }

    .button {
        padding: 8px 16px;
    }
   
        .video-section video {
          max-width: 100%; /* Make the video responsive */
          height: auto; /* Ensure aspect ratio is maintained */
          width: 60%; /* Adjust the width as needed */
          max-height: 40vh; /* Limit the height to 40% of the viewport height */
        }
      
    .hover-4  {
        border: 8px solid;
        border-image: repeating-linear-gradient(135deg, #F8CA00 0 10px, #E97F02 0 20px, #BD1550 0 30px) 8;
        -webkit-mask: conic-gradient(from 180deg at top 8px right 8px, #0000 90deg, #000 0) var(--_i, 200%) 0 / 200% var(--_i, 8px) border-box no-repeat, conic-gradient(at bottom 8px left 8px, #0000 88deg, #000 0) 0 var(--_i, 200%) / var(--_i, 8px) 200% border-box no-repeat, linear-gradient(#000 0 0) padding-box no-repeat;
        transition: .2s, -webkit-mask-position .3s .3s;
        position: fixed;
        bottom: -180px;
        left: 140px;
        left: 38%;
        left: calc(124vw - 80px);
        background: rgba(222, 24, 67, 0.3);
        transform: translate(-40%, -50%) rotate(0deg);
        font-family: 'KG First Time In Forever', sans-serif, bold;
        font-size: 68px;
    }
  
}@media only screen and (max-width: 768px) {
    /* For inverted-2 */
    .inverted-2 {
        display: none; /* Hide this element */
    }

    /* For inverted-3 */
    .inverted-3 {
        position: absolute;
        top: 5%;
        left: 5%;
        transform: translate(-50%, -50%) rotate(20deg);
        color: hotpink; /* Change color to hot pink */
    }

    /* For inverted-4 */
    .inverted-4 {
        display: none; /* Hide this element */
    }

    /* For inverted-5 */
    .inverted-5 {
        position: absolute;
        top: 5%;
        right: 5%;
        transform: translate(-50%, -50%) rotate(-30deg);
        color: purple; /* Change color to purple */
    }

    /* For inverted-6 */
    .inverted-6 {
        display: none; /* Hide this element */
    }

    /* For inverted-7 */
    .inverted-7 {
        display: none; /* Hide this element */
    }

    /* For inverted-8 */
    .inverted-8 {
        display: none; /* Hide this element */
    }

    /* For d-1 */
    .d-1 {
        display: none; /* Hide this element */
    }
}
