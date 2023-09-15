<script lang="ts">
    import vector from '$lib/assets/images/blockchain-vector.png';
	import { onMount } from 'svelte';
    import 'vanilla-tilt';

    let eyeSize = "h-8"
    let pupilSize = "w-3 h-4";

    const handleMouserOver = (e : any) => {
        const pupils = document.querySelectorAll(".eye .pupil") as NodeListOf<HTMLElement>

        pupils.forEach((pupil) => {
          // get x and y postion of cursor
          var rect = pupil.getBoundingClientRect();
          var x = (e.pageX - rect.left) / 120 + "px";
          var y = (e.pageY - rect.top) / 120 + "px";
          pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
        });
    }

    const handleEyeSize = (grow : boolean) => {
        if (grow) {
            eyeSize = "h-10";
            pupilSize = "w-3.5 h-5";
        }
        else {
            eyeSize = "h-8"
            pupilSize = "w-3 h-4";
        }
    }

</script>

<div class="flex justify-center items-center w-full h-screen" on:mousemove={handleMouserOver} role="presentation">
    <div class="flex h-2/4 items-center gap-4">
        <div class="text-right">
            <header class="flex gap-5 justify-end items-center">
                <h1 class="text-5xl font-space-mono font-bold italic">Chain</h1>
                <div class="eyes">
                    <div class="eye {eyeSize}">
                        <div class="pupil {pupilSize}"></div>
                    </div>
                    <div class="eye {eyeSize}">
                        <div class="pupil {pupilSize}"></div>
                    </div>
                </div>
                <h1 class="text-5xl font-space-mono font-bold italic">View</h1>
            </header>
            <h2 class="font-space-mono text-xl max-w-xl mt-6">Uma maneira fácil e intuitiva para visualizar suas transações e o balanço de sua carteira de criptomoedas 🧐</h2>
            <h3 class="font-roboto-mono font-light max-w-xl mt-4 mb-8">Não armazenamos nenhuma de suas informações, sendo assim, é necessario o login a cada acesso.</h3>
            <div class="h-12">
                <a href="/initiate" on:mouseleave={() => handleEyeSize(false)} on:mouseenter={() => handleEyeSize(true)} class="btn btn-lg btn-primary">Iniciar</a>
            </div>
        </div>
        <div data-tilt>
            <img src={vector} alt="vector" width="600px">
        </div>
    </div>
</div>
