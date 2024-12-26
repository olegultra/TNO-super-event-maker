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
.TNO-header-text {
    color: white;
    font-family: bomb;
}
.TNO-info-text {
    color: #B2C9C2;
    font-family: aldrich;
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
                type: "image", src: "diplo_upper_win_bg.png",
                x: 0, y: 0
            },
            {
                type: "image", src: "заглушка.png",
                x: 176, y: 36,
                classes: ["center"],
                replaceable: true
            },
            {
                type: "text", text: "Country Name",
                x: 214, y: -7,
                classes: ["TNO-header-text"], style: "font-size: 16px",
                replaceable: true
            },
            {
                type: "text", text: "Faction Name",
                x: 214, y: 10,
                classes: ["TNO-header-text"], style: "font-size: 16px",
                replaceable: true
            },
            {
                type: "text", text: "Leader Name",
                x: 214, y: 28,
                classes: ["TNO-header-text"], style: "font-size: 16px",
                replaceable: true
            },
            {
                type: "text", text: "Party Name",
                x: 236, y: 71,
                classes: ["TNO-info-text"], style: "font-size: 17px",
                replaceable: true
            },
            {
                type: "text", text: "Ideology",
                x: 236, y: 94,
                classes: ["TNO-info-text"], style: "font-size: 17px",
                replaceable: true
            },
            {
                type: "text", text: "Election Label",
                x: 236, y: 117,
                classes: ["TNO-info-text"], style: "font-size: 17px",
                replaceable: true
            },
            {
                type: "circle",
                x: 145, y: 85,
                width: 63, height: 63,
                classes: ["pieChart"], style: "border-radius: 50%",
                replaceable: true
            },
            {
                id: "input0",
                type: "number",
                x: 90, y: 600,
                value: "100", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input1",
                type: "number",
                x: 90, y: 605,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input2",
                type: "number",
                x: 90, y: 610,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input3",
                type: "number",
                x: 90, y: 615,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input4",
                type: "number",
                x: 90, y: 620,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input5",
                type: "number",
                x: 90, y: 630,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input6",
                type: "number",
                x: 90, y: 635,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input7",
                type: "number",
                x: 90, y: 640,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input8",
                type: "number",
                x: 90, y: 645,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input9",
                type: "number",
                x: 90, y: 650,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input10",
                type: "number",
                x: 90, y: 655,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                id: "input11",
                type: "number",
                x: 90, y: 660,
                value: "0", min: "0", max: "100",
                replaceable: true
            },
            {
                type: "image", src: "pol_piechart_overlay.png",
                x: 141, y: 81,
                style: "z-index: 15"
            },
            {
                type: "image", src: "заглушка.png",
                x: 175, y: 191,
                classes: ["center"], style: "transform: scale(90%) translate(-50%, -55%);",
                replaceable: true
            },
            {
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
                type: "image", src: "superevent_unknown.png",
                x: 8, y: 53,
                width: 572, height: 390,
                replaceable: true
            },
            {
                type: "image", src: "superevent_new.png",
                x: 0, y: 0,
            },
            {
                type: "text", text: "Quote\n-A person",
                x: 120, y: 287,
                width: 455,
                classes: ["TNO-header-text"], style: "font-size: 20px; text-align: right;",
                replaceable: true
            },
            {
                type: "text", text: "Button Text",
                x: 194, y: 439,
                width: 200,
                classes: ["TNO-header-text"], style: "font-size: 20px; text-align: center; text-shadow: 1px 0 1px #000000, 0 1px 1px #000000, -1px 0 1px #000000, 0 -1px 1px #000000;",
                replaceable: true
            },
            {
                type: "text", text: "Event Title",
                x: 45, y: -4,
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
            /*{
                type: "image", src: "news_event.png",
                x: 0, y: 0
            },
            {
                type: "image", src: "flag_unknown.png",
                x: 27, y: 139,
                width: 161, height: 420,
                replaceable: true
            },
            {
                type: "image", src: "news_event_overlay.png",
                x: 27, y: 139,
                width: 161, height: 420
            },*/
            {
                type: "text", text: " ",
                x: 34, y: 82,
                width: 460,
                classes: [`TNO-news-text`], style: "font-size: 22px; text-align: center;",
                replaceable: true
            },
            {
                type: "text", text: " ",
                x: 195, y: 140,
                width: 310,
                classes: [`TNO-news-text`], style: "font-size: 16px; text-align: left;",
                replaceable: true
            },
            /*{
                type: "image", src: "event_option_entry.png",
                x: 165, y: 496
            },*/
            {
                type: "text", text: " ",
                x: 172, y: 484,
                width: 340, height: 40,
                classes: [`TNO-news-text`], style: "justify-content: center; display: flex; align-items: center; text-align: center",
                replaceable: true
            }
        ]
    }
]

var templates = [];
const urlParams = new URL(window.location.href).searchParams;
templates = tno_templates;
document.getElementById("q-drop").innerHTML = document.getElementById("q-drop").innerText;
