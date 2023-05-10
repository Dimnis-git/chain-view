<script>
	import "../app.css";
	import Logo from '$lib/images/chain-vector.png';

	// ICONS
	import FaCircleUser from '$lib/icons/fa-circle-user.svelte'
	import FaUserPlus from '$lib/icons/fa-user-plus.svelte'
	import FaHouse from "$lib/icons/fa-house.svelte";
	import FaChartSimple from "$lib/icons/fa-chart-simple.svelte";
	import FaCircleHalfStroke from "$lib/icons/fa-circle-half-stroke.svelte";
	import FaSun from "$lib/icons/fa-sun.svelte";
	import FaMoon from "$lib/icons/fa-moon.svelte";
	import FaLaptop from "$lib/icons/fa-laptop.svelte";
</script>

<div>
	<header>
		<nav class="navbar bg-neutral">
			<div class="navbar-start">
				<img src={Logo} alt="logo" class="w-10 mr-2">
				<a class="btn btn-ghost normal-case text-2xl font-mono px-1" href="/">ChainView</a>
			</div>
			<div class="navbar-center">
				<ul class="menu menu-horizontal bg-base-100 rounded-box">
					<li>
						<div>
							<FaHouse className="icon-sm"/>
							Home
						</div>
					</li>
					<li>
					  	<div>
							<FaChartSimple className="icon-sm" />
							Cotações
						</div>
					</li>
				  </ul>
			</div>
			<div class="navbar-end gap-2">
				<div class="dropdown">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-sm btn-ghost m-1 gap-2">
						<FaCircleHalfStroke className="icon-xs"/>
						Tema
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
					  	<li>
							<!-- svelte-ignore a11y-missing-attribute -->
							<a>
								<FaSun className='icon-xs' />
								<span class="font-semibold uppercase">Claro</span>
							</a>
						</li>
						<li>
							<!-- svelte-ignore a11y-missing-attribute -->
							<a>
								<FaMoon className='icon-xs' />
								<span class="font-semibold uppercase">Escuro</span>
							</a>
						</li>
						<li>
							<!-- svelte-ignore a11y-missing-attribute -->
							<a>
								<FaLaptop className='icon-xs'/>
								<span class="font-semibold uppercase">Sistema</span>
							</a>
						</li>
					</ul>
				</div>
				<a class="btn btn-sm btn-secondary gap-2" href="register">
					<FaUserPlus className="icon-xs" />
					Cadastro
				</a>
				<a class="btn btn-sm btn-primary gap-2" href="login">
					<FaCircleUser className="icon-xs" />
					Login
				</a>
			</div>
		</nav>
	</header>
	<main class="flex flex-col justify-between">
		<slot class="h-full"/>
		<footer class="footer items-center p-4 bg-neutral text-neutral-content absolute bottom-0">
			<div class="items-center grid-flow-col">
				<p class="font-regular">ChainView © 2023 - Todos os direitos reservados</p>
			</div>
			<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			  <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></i>
			  <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></i>
			  <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></i>
			</div>
		</footer>
	</main>
</div>
