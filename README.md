body, html {
                margin: 0;
                padding: 0;
                background-color: #fff;*/
                color: #444452;
                /*font-family: Apercu,Source Sans Pro,Helvetica,Arial,sans-serif;*/
                line-height: 1.5;
                scroll-behavior: smooth;
                font-family: 'Share Tech Mono', monospace;
            }

body.night, html.night {
                            background-color: #131417;
                            color: #afafbf;
                            scroll-behavior: smooth;
                        }


h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

h2 {
    display: block;
    font-size: 1.2em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

body a, html a {
    text-decoration: none;
    font-weight: 900;
    color: #36363c;
    transition: all .25s ease-in-out;
    font-family: Trebuchet MS;
}

body p, html p {
    font-weight: 200;
}

body a:hover{
    text-decoration: underline blue;
}

body .emoji, html .emoji {
    display: inline-block;
    vertical-align: text-top;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

section{
    /*opacity: 1;*/
    /*word-spacing: 2px;*/
    /*letter-spacing: 1px;*/   
}

section.fadeIn{
    animation: fadeIn 2s forwards;
}

.switch-wrapper{
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    position: fixed;
                    top: 20px;
                    right: 30px;
                }

.switch-wrapper .sun {
                        background: url(images/white_sun_with_rays.png) no-repeat center;
                        background-size: 100%;
                    }

body.night .switch-wrapper .sun , html.night .switch-wrapper .sun {
                        background: url(images/sun-white.svg) no-repeat center;
                        background-size: 100%;
                    }

.switch-wrapper .moon, .switch-wrapper .sun {
                        width: 17px;
                        height: 17px;
                    }

.switch-wrapper .toggle-wrapper {
                        margin: 10px;
                    }

.switch-wrapper .toggle-wrapper #switch {
                        height: 0;
                        width: 0;
                        visibility: hidden;
                        position: absolute;
                    }

.switch-wrapper .toggle-wrapper input[type=checkbox] {
                        height: 0;
                        width: 0;
                        visibility: hidden;
                    }

.switch-wrapper .toggle-wrapper label {
                        cursor: pointer;
                        text-indent: -9999px;
                        width: 45px;
                        height: 25px;
                        background: grey;
                        display: block;
                        border-radius: 100px;
                        position: relative;
                    }

.switch-wrapper .toggle-wrapper label:after {
                        content: '';
                        position: absolute;
                        left: 2px;
                        top :1px;
                        width: 20px;
                        height: 22px;
                        background: #fff;
                        border-radius: 40px;
                        transition: 0.3s;
                    }

.switch-wrapper .toggle-wrapper input:checked + label {
                        background: #bada55;
                    }

.switch-wrapper .toggle-wrapper input:checked + label:after {
                        left: calc(100% - 2px);
                        transform: translateX(-100%);
                    }

.switch-wrapper .toggle-wrapper label:active:after {
                        width: 0px;
                    }

.switch-wrapper .moon {
                        background: url(images/moon.png) no-repeat center;
                        background-size: 100%;
                    }

body.night .switch-wrapper .moon, html.night .switch-wrapper .moon {
                        background: url(images/moon-white.svg) no-repeat center;
                        background-size: 100%;
                    }

.switch-wrapper a, body.night .switch-wrapper a {
    color: #007bff;
    margin: 15px;
}


.txt-rotate {
    color: #FFCB04;
    font-weight: bold;
}

.myname {
      text-transform: uppercase;
      letter-spacing: 2px;
      text-decoration: none;
      text-fill-color: transparent;
      display: inline-block;
      /*background-image: linear-gradient(to right, #30CFD0 0%, #330867 100%);*/
      animation: .8s shake infinite alternate;
}

.name{
    font-weight: bolder;
}

.content {
    position: absolute;
    top: 37%;
    overflow:hidden;
    font-size: 30px;
    line-height: 50px;
    color: #FFCB04;
}
.content .container {
    font-weight: 600;
    overflow: hidden;
    height: 50px;
    padding: 0px 40px;
    width: 100%;
}

.container:before {
      content: '[';
      left: 0;
    }

.container:after {
      content: ']';
      position: absolute;
      right: 0;
    }

.container:after, .container:before {
    position: absolute;
    top: 0px;
    color: #007bff;
    font-size: 50px;
    animation-name: opacity1;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

.list {
    margin-top: 0px;
    margin-bottom: 60px;
    text-align: left;
    line-height:80px;
    list-style: none;
    animation-name: change;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

.item {
    line-height: 50px;
    margin-bottom: 0px;
}


.intro {
        padding: 80px 100px;
        height: 75vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        max-width: 1440px;
        margin: 0 auto;
}   
    

.intro_hello {
    font-weight: 300;   
}

.intro_hello, .intro_tagline {
    font-size: 2.1rem;
}

.intro_hello .wave-hand.animated {
    position: relative;
    animation: wave 2.0s linear;
}

.intro_hello .wave-hand.animated:hover {
    position: relative;
    animation: wave infinite linear;
}

.intro_hello .wave-hand {
    background-image: url(images/waving-hand.png);
    margin-left: 10px;
    cursor: pointer;
    position: relative;
}

.intro_hello .emoji {
    width: 40px;
    height: 40px;
}

.intro_tagline {
    font-weight: 300;
    max-width: 700px;   
}

.intro__tagline .name {
    font-weight: 700;
}

.intro_tagline .technologist {
    background-image: url(images/male-technologist.png);
}

.intro_tagline .emoji {
    width: 40px;
    height: 40px;
}

.intro_contact {
    font-size: 1.25rem;
    font-weight: 100;
}

.intro_contact .emoji.pointer {
    background-image: url(images/right-pointing.png);
    width: 30px;
    height: 30px;
    margin: 0 5px;
    vertical-align: text-bottom;
}

.intro_contact .highlight-link {
    font-weight: 400;
    text-decoration: none;
    display: inline-block;
    padding: 2px 3px;
    transition: all .2s ease-in-out;
    text-decoration: none;
    box-shadow: inset 0 -3px 0 #007bff;
}

.intro_contact .highlight-link:hover {
    box-shadow: inset 0 -33px 0 0 #007bff;
    color: #fff;
}

section {
    position: relative;
}

.status {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1.1rem;
    font-family: Inconsolata,monospace;
    margin-top: 70px;
    color: #131417;
}

.status_light {
    width: 30px;
    height: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.status_light_ring {
    position: absolute;
    width: 25px;
    height: 25px;
    -webkit-animation: pulsate 2s ease-out;
    animation: pulsate 2s ease-out;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    opacity: 0;
    border: 3px solid #bada55;
    border-radius: 30px;
}

.status_light_led {
    position: absolute;
    width: 13px;
    height: 13px;
    background: #bada55;
    border-radius: 100%;
}

.status_message {
    margin-left: 15px;
}

body .section, html .section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 170px;
}

body .section_title, html .section_title {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 200px;
    margin-right: 70px;
    color: #007bff;
    text-transform: uppercase;
    text-align: right;
    font-weight: 700;
    letter-spacing: 2px;
}

body .section_content, html .section_content {
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
    max-width: 650px;
}

body .section_content p, html .section_content p {
    margin-top: 0;
    margin-bottom: 25px;
}

body .section_content .underline-link, html .section_content .underline-link {
    position: relative;
    display: inline-block;
}

section .skills{
    visibility: visible;  
    -webkit-transform: translateY(0) scale(1); 
    opacity: 1;
    transform: translateY(0) scale(1); 
    opacity: 1;
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(.694,0,.335,1) 0s, 
    opacity 0.6s cubic-bezier(.694,0,.335,1) 0s; 
    transition: transform 0.6s cubic-bezier(.694,0,.335,1) 0s, 
    opacity 0.6s cubic-bezier(.694,0,.335,1) 0s; 
}

.skills .skillz {
    display: flex;
    justify-content: space-between;
}

.skills .skillz_category_label {
    font-weight: 800;
    color: #36363c;
    text-transform: uppercase;  
}

.skills .skillz_category_item {
    margin: 3px 0;
    font-size: .9rem;
}

.section .featured-projects {
   visibility: visible;  
   -webkit-transform: translateY(0) scale(1); 
   opacity: 1;
   transform: translateY(0) scale(1); 
   opacity: 1;
   -webkit-transition: -webkit-transform 0.6s cubic-bezier(.694,0,.335,1) 0s, 
   opacity 0.6s cubic-bezier(.694,0,.335,1) 0s; 
   transition: transform 0.6s cubic-bezier(.694,0,.335,1) 0s, 
   opacity 0.6s cubic-bezier(.694,0,.335,1) 0s;
}

.experience .jobs {
    margin-bottom: 100px;
}

.experience .job {
    margin-bottom: 25px;
}
.experience .job .time-place {
    display: flex;
    justify-content: space-between;
}

 a.experience .job .job_company {
    font-weight: 500;
}

.experience .job_time {
    font-size: .9rem;
    font-family: Inconsolata,monospace;
}

.experience .job_position {
    font-weight: 300;

}

.experience .arrow-link {
    font-size: 1.25rem;
    font-weight: 500;
}

.experience .arrow-link:after {
    width: 20px;
    height: 20px;
}

.featured-projects .project {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 10px;
    margin-left: -5%;
    width: 125%;
}

.featured-projects .project_pic {
    max-width: 700px;
    overflow: visible;
    margin: 0;
    margin-left: 32px;
}

.featured-projects .project_caption {
    width: 125px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}

.featured-projects .project_pic img {
    width: 100%;
    max-width: 100%;
    vertical-align: bottom;
}

.featured-projects .project_pic img:hover{
   background-color: blue;
}

.featured-projects .project_name a {
    font-weight: 700;
    margin-bottom: 10px;
}

.featured-projects .project p {
    font-size: .95rem;
    line-height: 1.5;
}

.featured-projects .featured-projects-content p {
    /* font-size: .85rem; */
    line-height: 1.3;
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.featured-projects .project_used_item {
    display: inline-block;
    margin: 3px 3px 3px 0;
    font-family: Inconsolata,monospace;
    font-size: .75rem;
    font-weight: 400;
    padding: 2px 7px;
    border-radius: 3px;
    color: #007bff;
    border: 1px solid #007bff;
    background: 0 0;
}

.project_links img {
    margin-top: 2%;
    width: 6%;
}

details summary::-webkit-details-marker {
  color: #007bff;
}

body .arrow-link, html .arrow-link {
    font-weight: 700;
    display: inline-block;
    transition: all .15s ease-in-out;
    background-color: transparent;
    white-space: nowrap;
}

body .arrow-link:after, html .arrow-link:after {
    position: relative;
    bottom: 2px;
    margin-left: 15px;
    content: "";
    background: url(images/arrow.png) no-repeat center;
    background-size: 100%;
    width: 15px;
    height: 15px;
    display: inline-block;
    vertical-align: middle;
}

body .arrow-link:hover, html .arrow-link:hover {
    transform: translateX(7px);
}
body ul, html ul {
    list-style: none;
    padding: 0;
}

.footer {
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*position: fixed;*/
    top: 730px;
    bottom: 0px;
    left: 0px;right: 0px;
}

.footer_copyright {
    font-weight: 0.700;
    width: 200px;
}

.footer_copyright .emoji{
    width: 20px;
    height: 20px;
}

.footer_links a {
    position: relative;
    display: inline-block;
    color: #007bff!important;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0 15px;
    outline: 0;
}

.footer_links a .text {
    font-size: .9rem;
    display: inline;
    letter-spacing: 1px;
}

.footer_links a:hover {
    text-decoration: underline;
}

.footer_links img {
    display: none;
    width: 22px;
}

body #top-button, html #top-button {
    background: 0 0;
    border: none;
    outline: 0;
    width: 55px;
    position: fixed;
    bottom: 25px;
    right: 10px;
    cursor: pointer;
    display: none;
    scroll-behavior: smooth;   
}

body #top-button img, html #top-button img {
    width: 100%;
    scroll-behavior: smooth;
}

.other-projects .project {
    max-width: 600px;
    margin-bottom: 50px;
}

.other-projects .project_name {
    margin-bottom: 10px;
}

.other-projects .project p {
    font-size: .9rem;
    margin-bottom: 20px;
}

.other-projects .project_used_item:first-of-type {
    margin-left: 0;
}

.other-projects .project_used_item {
    display: inline-block;
    margin: 3px 3px 3px 0;
    font-family: Inconsolata,monospace;
    font-size: .75rem;
    font-weight: 400;
    padding: 2px 7px;
    border-radius: 3px;
    color: #007bff;
    border: 1px solid #007bff;
    background: 0 0;
}

body.night .experience .job_time, body.night .footer_copyright, body.night .intro, body.night .skills .skillz_category_label, body.night .status, body.night a, body.night strong, html.night .experience .job_time, html.night .footer_copyright, html.night .intro, html.night .skills .skillz_ctegory_label, html.night .status, html.night a, html.night strong {
    color: #e7e7e7;
}


/*All Keyframes*/
@keyframes wave{
    0% {transform: rotate(0deg);}
    /*10%{transform: rotate(90deg);}*/
    20% {transform: rotate(90deg);}  
    /*30%{transform: rotate(90deg);}*/
    40% {transform: rotate(15deg);}
    /*50% {transform: rotate(90deg);}*/
    60% {transform: rotate(90deg);}
    /*70%{transform: rotate(90deg);}*/
    80%{transform: rotate(15deg);}
    /*90% {transform: rotate(90deg);}*/
    100% {transform: rotate(0deg);}
}

@-webkit-keyframes wave{
    0% {transform: rotate(0deg);}
    /*10%{transform: rotate(90deg);}*/
    20% {transform: rotate(90deg);}  
    /*30%{transform: rotate(90deg);}*/
    40% {transform: rotate(15deg);}
    /*50% {transform: rotate(90deg);}*/
    60% {transform: rotate(90deg);}
    /*70%{transform: rotate(90deg);}*/
    80%{transform: rotate(15deg);}
    /*90% {transform: rotate(90deg);}*/
    100% {transform: rotate(0deg);}
}

@-webkit-keyframes pulsate {
      0% {
        transform: scale(0.1, 0.1);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.2, 1.2);
        opacity: 0;
      }
    }

@keyframes pulsate {
      0% {
        transform: scale(0.1, 0.1);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.2, 1.2);
        opacity: 0;
      }
    }

@-webkit-keyframes fadeIn {
  /* keyframes must have at least two intervals from/to or 0%/100% */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  /* keyframes must have at least two intervals from/to or 0%/100% */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}

@-webkit-keyframes shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
}

@keyframes opacity1 {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes opacity1 {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-35%,0);}
  33.32%,45.98% {transform:translate3d(0,-68%,0);}
  49.98%,62.64% {transform:translate3d(0,-70%,0);}
  66.64%,79.3% {transform:translate3d(0,-37%,0);}
  83.3%,95.96% {transform:translate3d(0,-0%,0);}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-35%,0);}
  33.32%,45.98% {transform:translate3d(0,-68%,0);}
  49.98%,62.64% {transform:translate3d(0,-70%,0);}
  66.64%,79.3% {transform:translate3d(0,-37%,0);}
  83.3%,95.96% {transform:translate3d(0,-0%,0);}
}


/*All Media Queries*/

@media screen and (max-width: 320px)
{
   
    .intro_hello, .intro_tagline {
        font-size: 1.4rem;
    }
    body .intro {
            padding: 130px 45px; 
        }
}


@media screen and (max-width: 425px){
    .switch-wrapper{
            top: 10px;
            right: 20px;
        }
    body .intro{
            padding: 100px 35px;
            line-height: 1.5;
        }

     .intro_hello, .intro_tagline{
        margin-bottom: 5%;
        font-size: 1.75rem;
    }

    body section, html section {
            padding: 80px 55px;

        }
    body .section_content, html .section_content {
        padding-left: 30px;
    }

    .content{
        /*position: absolute;*/
      top: 36%;
      left: 5%;
      font-size: 1.5rem;
    }

    .content .container {
        padding: 0px 30px 0px 30px;
    }

    .experience .job .time-place {
        display: block;
    }

    .experience .job_time {
        font-size: .8rem;
    }

    .footer {
        padding: 50px 30px;
    }

    body #top-button, html #top-button {
        bottom: 15px;
        right: 3px;
    }

    .status_message{
        font-size: 1rem;
    }
}

@media screen and (max-width: 550px){
    .intro {
        padding: 120px 50px;
    }

    .intro_hello, .intro_tagline {
        font-size: 1.55rem;
        margin-bottom: 0%;
    }

     .content {
      top: 41
