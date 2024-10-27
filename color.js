const pallete = document.getElementById('pallete');
const colorInput1 = document.getElementById('colorInput1');
const colorInput2 = document.getElementById('colorInput2');
const colorInput3 = document.getElementById('colorInput3');
const colorInput4 = document.getElementById('colorInput4');
const colorInput5 = document.getElementById('colorInput5');
const colorInput6 = document.getElementById('colorInput6');
const colorInput7 = document.getElementById('colorInput7');
const colorInput8 = document.getElementById('colorInput8');
const colorInput9 = document.getElementById('colorInput9');
const colorInput10 = document.getElementById('colorInput10');
const colorInput11 = document.getElementById('colorInput11');
const colorInput12 = document.getElementById('colorInput12');
const changeColorPallete = document.getElementById('changeColorPallete');

changeColorPallete.addEventListener('click', () => {
            const newColor1 = colorInput1.value;
            const newColor2 = colorInput2.value;
            const newColor3 = colorInput3.value;
            const newColor4 = colorInput4.value;
            const newColor5 = colorInput5.value;
            const newColor6 = colorInput6.value;
            const newColor7 = colorInput7.value;
            const newColor8 = colorInput8.value;
            const newColor9 = colorInput9.value;
            const newColor10 = colorInput10.value;
            const newColor11 = colorInput11.value;
            const newColor12 = colorInput12.value;

            if (newColor1 && !isNaN(newColor1) && newColor1 >= 0) {
                pallete.style.background = 'conic-gradient(#591918 '+newColor1+'%, #852121 0.00% '+newColor2+'%, #9a3351 0.56% '+newColor3+'%, #586492 5.29% '+newColor4+'%, #31357d 13.57% '+newColor5+'%, #1c1b65 22.90% '+newColor6+'%, #6f6f6f '+newColor7+'%, #414141 0.00% '+newColor8+'%, #181818 0.00% '+newColor9+'%, #6d2d23 0.00% '+newColor10+'%, #33211d 0.00% '+newColor11+'%, #30194f 0.00% '+newColor12+'%)';
            } else {
                alert('Ты чо бля');
            }
        });