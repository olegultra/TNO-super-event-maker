var tno_templates = [
    {
        x: 10,
        y: 40,
        style: `
@font-face {
    font-family: bomb;
    src: url("Bombardier-Regular.ttf");
}
@font-face {
    font-family: aldrich;
    src: url("Aldrich.ttf")
}
@font-face {
    font-family: gouranga;
    src: url("Gouranga-Pixel.ttf")
}
.TNO-header-text {
    color: white;
    font-family: bomb;
}
.TNO-info-text {
    color: #9eb3ad;
    font-family: aldrich;
}
.TNO-newspaper {
     color: black;
     font-family: gouranga;
}
body {
    background-color: #000000;
}
          `,
        elements: [
            {
                id: "flag",
                type: "image",
                src: "flag_unknown.png",
                x: 23,
                y: 9,
                width: 82,
                height: 52,
                replaceable: true
            },
            {
                id: "portrait",
                type: "image", src: "leader_unknown.png",
                x: 5, y: 73,
                width: 117, height: 156,
                replaceable: true
            },
            {
                id: "img1", 
                type: "image", src: "diplo_upper_win_bg.png",
                x: 0, y: 0
            },
            {
                id: "dog1",
                type: "image", src: "economy_template.jpg",
                x: 520, y: 0
            },
            {
                id: "img2",
                type: "image", src: "заглушка.png",
                x: 176, y: 36,
                classes: ["center"],
                replaceable: true
            },
            {
                id: "img3", 
                type: "image", src: "заглушка.png",
                x: 483, y: 36,
                classes: ["center"], style: "z-index: 2;",
                replaceable: true
            },
            {
                id: "dog2", 
                type: "image", src: "заглушка.png",
                x: 671, y: 33,
                classes: ["center"],
                replaceable: true
            },
            {
                id: "dog3", 
                type: "image", src: "заглушка.png",
                x: 738, y: 33,
                classes: ["center"],
                replaceable: true
            },
            {
                id: "txt1",
                type: "text", text: "Country Name",
                x: 212, y: -4,
                classes: ["TNO-header-text"], style: "font-size: 14.7px; display: inline-block;",
                replaceable: true
            },
            {
                id: "txt2",
                type: "text", text: "Faction Name",
                x: 212, y: 13.5,
                classes: ["TNO-header-text"], style: "font-size: 14.7px",
                replaceable: true
            },
            {
                id: "txt3",
                type: "text", text: "Leader Name",
                x: 212, y: 31,
                classes: ["TNO-header-text"], style: "font-size: 14.7px",
                replaceable: true
            },
            {
                id: "txt4",
                type: "text", text: "Party Name",
                x: 236, y: 73,
                classes: ["TNO-info-text"], style: "font-size: 16px",
                replaceable: true
            },
            {
                id: "txt5",
                type: "text", text: "Ideology",
                x: 236, y: 95,
                classes: ["TNO-info-text"], style: "font-size: 16px",
                replaceable: true
            },
            {
                id: "txt6",
                type: "text", text: "Election Label",
                x: 236, y: 119,
                classes: ["TNO-info-text"], style: "font-size: 16px",
                replaceable: true
            },
            /*{
                type: "pie",
                x: 145, y: 85,
                width: 63, height: 63,
                classes: ["pieChart"],
                replaceable: true
            },*/
            {
                id: "img5",
                type: "image", src: "pol_piechart_overlay.png",
                x: 141, y: 81,
                style: "z-index: 15"
            },
            {
                id: "img6",
                type: "image", src: "заглушка.png",
                x: 175, y: 191,
                classes: ["center"], style: "transform: scale(90%) translate(-50%, -55%);",
                replaceable: true
            },
            {
                id: "txt7",
                type: "text", text: "Focus Name",
                x: 234, y: 160,
                width: 272,
                classes: ["TNO-info-text"], style: "font-size: 19px; text-align: center;",
                replaceable: true
            }
        ]
    },
    {
        x: 540,
        y: 40,
        elements: [
            {
                id: "img7",
                type: "image", src: "superevent_unknown.png",
                x: 8, y: 146,
                width: 572, height: 390,
                replaceable: true
            },
            {
                id: "img8",
                type: "image", src: "superevent_new.png",
                x: 0, y: 93,
            },
            {
                id: "txt8",
                type: "text", text: "Quote\n-A person",
                x: 120, y: 380,
                width: 455,
                classes: ["TNO-header-text"], style: "font-size: 20px; text-align: right;",
                replaceable: true
            },
            {
                id: "txt9",
                type: "text", text: "Button Text",
                x: 194, y: 532,
                width: 200,
                classes: ["TNO-header-text"], style: "font-size: 20px; text-align: center; text-shadow: 1px 0 1px #000000, 0 1px 1px #000000, -1px 0 1px #000000, 0 -1px 1px #000000;",
                replaceable: true
            },
            {
                id: "txt10",
                type: "text", text: "Event Title",
                x: 45, y: 89,
                width: 500,
                classes: ["TNO-info-text"], style: "font-size: 20px; text-align: center;",
                replaceable: true
            }
        ]
    },
    {
        x: 10, y: 280,
        style: `.TNO-news-text {
    color: black;
    font-family: 'Times New Roman', sans-serif;
}`,
        elements: [
            {
                id: "cat1",
                type: "image", src: "news_event.png",
                x: 0, y: 0,
                /*style: "display: none;"*/
            },
            {
                id: "cat2",
                type: "image", src: "flag_unknown.png",
                x: 27, y: 139,
                width: 161, height: 420,
                /*style: "display: none;",*/
                replaceable: true
            },
            {
                id: "cat3",
                type: "image", src: "news_event_overlay.png",
                x: 27, y: 139,
                width: 161, height: 420,
                /*tyle: "display: none;"*/
            },
            {
                id: "cat4",
                type: "text", text: " ",
                x: 34, y: 82,
                width: 460,
                classes: [`TNO-newspaper`], style: "font-size: 22px; text-align: center;",
                replaceable: true
            },
            {
                id: "cat5",
                type: "text", text: " ",
                x: 195, y: 140,
                width: 310,
                classes: [`TNO-newspaper`], style: "font-size: 16px; text-align: left;",
                replaceable: true
            },
            {
                id: "cat6",
                type: "image", src: "event_option_entry.png",
                x: 165, y: 496,
                /*style: "display: none;"*/
            },
            {
                id: "cat7",
                type: "text", text: " ",
                x: 172, y: 484,
                width: 340, height: 40,
                classes: [`TNO-newspaper`], style: "justify-content: center; align-items: center; text-align: center;",
                replaceable: true
            }
        ]
    }
]

var templates = [];
const urlParams = new URL(window.location.href).searchParams;
templates = tno_templates;
document.getElementById("q-drop").innerHTML = document.getElementById("q-drop").innerText;
