<script>
	import { fly } from 'svelte/transition';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import DashboardHeader from '../components/DashboardHeader.svelte';
	import Header from '../components/Header.svelte';
	import Spinner from '../components/Spinner.svelte';

	let status = '';
	let brand = '';
	let model = '';
	let color = '';
	let year = '';
	let license_plate_number = '';
	let vin = '';
	let body_number = '';
	let registration_certificate_number = '';
	let taxi_license_number = '';
	let transmission = '';
	let boosters = '';
	let child_safety_seats = '';
	let branded_wrap = '';
	let light_box = '';
	let fleet_car = '';
	let code_name = '';
	let category = '';
	// error messages
	let hasErrors = false;
	let usernameError = '';
	let emailError = '';
	let fullnameError = '';
	let phonenumberError = '';
	let passwordError = '';
	let hasusernameError = false;
	let hasemailError = false;
	let hasfullnameError = false;
	let hasPhoneNumberError = false;
	let hasPasswordError = false;
	let isPosting = false;
	let toyota_brands = [
		'Avalon',
		'BELTA',
		'CAMRY',
		'CENTURY',
		'ALLION',
		'LEVIN GT',
		'CROWN',
		'ETIOS',
		'MIRAI',
		'PRIUS',
		'AGYA',
		'AQUA',
		'COROLLA',
		'ETIOS',
		'GLANZA',
		'PASSO',
		'YARIS',
		'4RUNNER',
		'VENZA',
		'HIGHLANDER',
		'LAND CRUISER',
		'RAV4',
		'RUSH',
		'Vitz'
	];
    let audi_brands = [
        "A1",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "e-TRON GT",
        "TT COUPE/ROADSTER",
        "R8 COUPE/SPYDER",
        "Q2",
        "Q3",
        "Q3 SPORTBACK",
        "Q4 e-TRON",
        "Q4 SPORTBACK E-TRON",
        "Q5",
        "Q5 SPORTBACK",
        "Q6",
        "Q7",
        "Q8",
        "e-TRON",
    ]
    let bmw_brands = [
        "1 Series (F40)",
        "1 Series (F52)",
        "2 Series Gran Coupé",
        "2 Series",
        "3 Series",
        "4 Series",
        "5 Series",
        "6 Series",
        "7 Series",
        "8 Series",
        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X6",
        "X7",
        "Z4",
        "2 Series Active Tourer",
        "i3",
        "i4",
    ];
    let chevrolet_brands = [
        "Bolt",
        "Cruze",
        "Menlo",
        "Onix",
        "Spark",
        "Cruze",
        "Malibu",
        "Monza",
        "Onix",
        "Optra",
        "Sail",
        "Camaro",
        "Corvette",
        "Colorado",
        "Montana",
        "S10",
        "Silverado",
        "Blazer",
        "Bolt EUV",
        "Captiva",
        "Equinox",
        "Groove",
    ];
    let ford_brands = [
        "FIESTA",
        "FOCUS",
        "ESCORT",
        "MONDEO",
        "TAURUS",
        "GT",
        "MUSTANG",
        "ECOSPORT",
        "EDGE",
        "EQUATOR",
        "ESCAPE",
    ];

    let fiat_brands = [
        "MOBI",
        "NEW 500",
        "PANDA",
        "UNO",
        "ARGO",
        "CRONOS",
        "TIPO",
        "PULSE",
    ]

    let honda_brands = [
        "BRIO",
        "CITY HATCHBACK",
        "CIVIC HATCHBACK",
        "FIT",
        "ACCORD",
        "AMAZE",
        "CIVIC",
        "CRIDER",
        "ENVIX",
        "CR-V",
    ]
    let hyundai_brands = [
        "ACCENT",
        "HB20",
        "i10",
        "i20",
        "i30",
        "ACCENT",
        "AURA",
        "CELESTA",
        "ELANTRA",
        "GRANDEUR",
        "IONIQ",
        "SONATA",
    ]

    let inifinity_brands = [
        "Q50",
        "Q60",
        "QX50",
        "QX55",
        "QX60",
        "QX80",
    ]
    let jeep_brands = [
        "CHEROKEE",
        "COMPASS",
        "COMMANDER",
        "GRAND COMMANDER",
        "RENEGADE",
        "GLADIATOR",
    ]
    let kia_brands = [
        "CEED",
        "FORTE5",
        "PICANTO",
        "RAY",
        "RIO",
        "FORTE",
        "K4",
        "K5",
        "K6",
        "K7",
        "K8",
        "K9",
        "STINGER",
        "PROCEED",
        "SOUL",
        "SONET",
        "SORENTO",
        "SPORTAGE",
    ]

    let lexus_brands = [
        "CT",
        "IS",
        "ES",
        "LS",
        "RC",
        "LC",
        "UX",
        "NX",
        "RX",
        "RZ",
    ]
    let mazda_brands = [
        "MAZDA2",
        "MAZDA2 HYBRID",
        "MAZDA3",
        "MAZDA6",
        "CX-3",
        "CX-30",
        "CX-4",
        "CX-5",
        "CX-50",
        "CX-60",

    ]
    let mitsubishi_brands = [
        "Mitsubishi Adventure",
        "Mitsubishi Attrage",
        "Mitsubishi Carisma",
        "Mitsubishi Lettuce",
    ]
    let nissan_brands = [
        "LEAF",
        "MICRA",
        "NOTE",
        "NOTE AURA",
        "TIIDA",
        "ALMERA",
        "ALTIMA",
        "FUGA",
        "LANNIA",
        "MAXIMA",
        "SENTRA",
        "SKYLINE",
        "ARIYA",
        "MURANO",
        "PATHFINDER",
        "PATROL",
        "ROGUE",
    ]
    let opel_brands = [
        "ASTRA",
        "CORSA",
        "INSIGNIA",
        "CROSSLAND",
        "GRANDLAND",
        "MOKKA",
    ]
    let peugot_brands = [
        "208",
        "308",
        "301",
        "408",
        "508",

    ]
    let renault_brands = [
        "CLIO",
        "KWID",
        "MÉGANE",
        "SANDERO",
        "TWINGO	",
        "ZOE",
        "TALIANT",
        "ARKANA",
        "CAPTUR",
        "DUSTER",
        "KOLEOS",
    ]
    let suzuki_brands = [
        "ALTO",
        "BALENO",
        "CELERIO",
        "CULTUS",
        "IGNIS",
        "SWIFT",
        "WAGON R",
        "CIAZ",
        "DZIRE",
        "SWACE",
        "BREZZA",
    ]
    let vw_brands = [
        "GOL",
        "GOLF",
        "GRAN",
        "POLO",
        "ARTEON",
        "BORA",
        "LAMANDO",
        "LAVIDA",
        "MAGOTAN",
        "PASSAT",
        "PHIDEON",
        "VIRTUS",
    ]

	const handleErrorContainer = () => {
		hasErrors = false;
	};

	const handleRegisterVehicle = async () => {
		isPosting = true;
		setTimeout(function () {
			isPosting = false;
		}, 1500);
		const apiUrl = 'https://taxinetghana.xyz/admin_register_vehicle/';
		axios({
			method: 'POST',
			url: apiUrl,
			data: {
				status: status,
				brand: brand,
				model: model,
				color: color,
				year: year,
				license_plate_number: license_plate_number,
				vin: vin,
				body_number: body_number,
				registration_certificate_number: registration_certificate_number,
				taxi_license_number: taxi_license_number,
				transmission: transmission,
				boosters: boosters,
				child_safety_seats: child_safety_seats,
				branded_wrap: branded_wrap,
				light_box: light_box,
				fleet_car: fleet_car,
				code_name: code_name,
				category: category,
			},
			headers: { 'Content-Type': 'multipart/form-data' }
		})
			.then((response) => {
				goto('/vehicles');
			})
			.catch((error) => {
				console.log(error.response)
			});
	};
</script>

<svelte:head>
	<title>Taxinet | New Vehicle</title>
</svelte:head>
<DashboardHeader />
<div class="mainregistercontainer">
	<section
		class="register-container"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ duration: 500 }}
	>
		<h2>Add new vehicle</h2>
		<!-- <br /><br /><br /> -->
		<form on:submit|preventDefault={handleRegisterVehicle}>
			<div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Status</label>
					<select name="status" bind:value={status} class="form__input" id="status">
						<option value="Active">Active</option>
						<option value="In Active">In Active</option>
						<option value="Inspection">Inspection</option>
						<option value="In the shop">In the shop</option>
						<option value="Stolen">Stolen</option>
						<option value="In Garage">In Garage</option>
					</select>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">License plate number</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={license_plate_number}
						required
					/>
				</div>
			</div>
			<div class="form-box">
				<div class="form__group">
					<label for="make" class="form__label">Make</label>
					<select name="make" bind:value={brand} class="form__input" id="make">
						<option value="Audi">Audi</option>
						<option value="BMW">BMW</option>

						<option value="Chevrolet">Chevrolet</option>
						<option value="Ford">Ford</option>
						<option value="Fiat">Fiat</option>

						<option value="Honda">Honda</option>
						<option value="Hyundai">Hyundai</option>
						<option value="Infinity">Infinity</option>
						<option value="Jeep">Jeep</option>
					
						<option value="Kia">Kia</option>

						<option value="Lexus">Lexus</option>
						<option value="Mazda">Mazda</option>
						<option value="Mitsubishi">Mitsubishi</option>
						<option value="Nissan">Nissan</option>
						<option value="Opel">Opel</option>
						<option value="Peugeot">Peugeot</option>
						<option value="Renault">Renault</option>
						<option value="Suzuki">Suzuki</option>
						<option value="Saturn">Saturn</option>

						<option value="Toyota">Toyota</option>
						<option value="Volkswagen">Volkswagen</option>
					</select>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">Vin</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={vin}
						required
					/>
				</div>
			</div>
			<div class="form-box">
				<div class="form__group">
					<label for="poster" class="form__label">Model</label>
					<select name="categories" bind:value={model} class="form__input">
						{#if brand == 'Toyota'}
							{#each toyota_brands as tbrands}
								<option value={tbrands}>{tbrands}</option>
							{/each}
                            {:else if brand == "Audi"}
                            {#each audi_brands as aud}
								<option value={aud}>{aud}</option>
							{/each}
                            {:else if brand == "BMW"}
                            {#each bmw_brands as bmw}
								<option value={bmw}>{bmw}</option>
							{/each}
                            {:else if brand == "Chevrolet"}
                            {#each chevrolet_brands as chevrolet}
								<option value={chevrolet}>{chevrolet}</option>
							{/each}
                            {:else if brand == "Ford"}
                            {#each ford_brands as ford}
								<option value={ford}>{ford}</option>
							{/each}
                            {:else if brand == "Fiat"}
                            {#each fiat_brands as fiat}
								<option value={fiat}>{fiat}</option>
							{/each}
                            {:else if brand == "Honda"}
                            {#each honda_brands as honda}
								<option value={honda}>{honda}</option>
							{/each}
                            {:else if brand == "Hyundai"}
                            {#each hyundai_brands as hyundai}
								<option value={hyundai}>{hyundai}</option>
							{/each}
                            {:else if brand == "Infinity"}
                            {#each inifinity_brands as inifinity}
								<option value={inifinity}>{inifinity}</option>
							{/each}
                            {:else if brand == "Jeep"}
                            {#each jeep_brands as jeep}
								<option value={jeep}>{jeep}</option>
							{/each}
                            {:else if brand == "Kia"}
                            {#each kia_brands as kia}
								<option value={kia}>{kia}</option>
							{/each}
                            {:else if brand == "Lexus"}
                            {#each lexus_brands as lexus}
								<option value={lexus}>{lexus}</option>
							{/each}
                            {:else if brand == "Mazda"}
                            {#each mazda_brands as mazda}
								<option value={mazda}>{mazda}</option>
							{/each}
                            {:else if brand == "Mitsubishi"}
                            {#each mitsubishi_brands as mitshi}
								<option value={mitshi}>{mitshi}</option>
							{/each}
                            {:else if brand == "Nissan"}
                            {#each nissan_brands as nissan}
								<option value={nissan}>{nissan}</option>
							{/each}
                            {:else if brand == "Opel"}
                            {#each opel_brands as opel}
								<option value={opel}>{opel}</option>
							{/each}
                            {:else if brand == "Peugeot"}
                            {#each peugot_brands as peugot}
								<option value={peugot}>{peugot}</option>
							{/each}
                            {:else if brand == "Renault"}
                            {#each renault_brands as renault}
								<option value={renault}>{renault}</option>
							{/each}
                            {:else if brand == "Suzuki"}
                            {#each suzuki_brands as suzuki}
								<option value={suzuki}>{suzuki}</option>
							{/each}
                            {:else if brand == "Volkswagen"}
                            {#each vw_brands as vw}
								<option value={vw}>{vw}</option>
							{/each}
                            
						{/if}
					</select>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">Body number</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={body_number}
						required
					/>
				</div>
			</div>
            <div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Color</label>
					<select name="status" bind:value={color} class="form__input" id="status">
						<option value="Yellow">Yellow</option>
						<option value="White">White</option>
						<option value="Black">Black</option>
						<option value="Gray">Gray</option>
						<option value="Red">Red</option>
						<option value="Dark Blue">Dark Blue</option>
						<option value="Light Blue">Light Blue</option>
						<option value="Brown">Brown</option>
						<option value="Green">Green</option>
						<option value="Pink">Pink</option>
						<option value="Orange">Orange</option>
						<option value="Purple">Purple</option>
						<option value="Beige">Beige</option>
					</select>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">Vehicle registration certificate</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={registration_certificate_number}
						required
					/>
				</div>
			</div>
            <div class="form-box">
				<div class="form__group">
					<label for="description" class="form__label">Year</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={year}
						required
					/>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">License</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={taxi_license_number}
						required
					/>
				</div>
			</div>
            <div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Transmission</label>
					<select name="status" bind:value={transmission} class="form__input" id="status">
						<option value="Mechanical">Mechanical</option>
						<option value="Authomatic">Authomatic</option>
						<option value="Robotized">Robotized</option>
						<option value="Variator">Variator</option>
					</select>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">Branded Wrap</label>
					<input
						type="checkbox"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={branded_wrap}
						required
					/>
				</div>
			</div>
            <div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Boosters</label>
					<select name="status" bind:value={boosters} class="form__input" id="status">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>

					</select>
				</div>
				<div class="form__group">
					<label for="description" class="form__label">LightBox</label>
					<input
						type="checkbox"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={light_box}
						required
					/>
				</div>
			</div>
            <div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Child safety seats</label>
					<select name="status" bind:value={child_safety_seats} class="form__input" id="status">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>

					</select>
				</div>
				
			</div>
            <br />
            <hr/>
            <div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Fleet car</label>
					<select name="status" bind:value={fleet_car} class="form__input" id="status">
						<option value="Unselected">Unselected</option>
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				
			</div>
            <div class="form-box">
				
				<div class="form__group">
					<label for="description" class="form__label">Code Name</label>
					<input
						type="text"
						id="lpn"
						class="form__input"
						placeholder=""
						autocomplete="off"
						bind:value={code_name}
						required
					/>
				</div>
			</div>
            <br />
            <hr/>
            <div class="form-box">
				<div class="form__group">
					<label for="status" class="form__label">Category</label>
					<select name="status" bind:value={category} class="form__input" id="status">
						<option value="Comfort">Comfort</option>
						<option value="Courier">Courier</option>
						<option value="Economy">Economy</option>
						<option value="Delivery">Delivery</option>
					</select>
				</div>
				
			</div>
            <button class="form__button">Save</button>
            
		</form>
	</section>
</div>

<style lang="scss">

	@import '../styles/constant';

	.mainregistercontainer {
		@include setLeftMargin;
		@include setBackground;
		padding-top: 0px;
        padding: 20px;
        .register-container{
            h2{
                color: white;
                margin-bottom: 20px;
            }
            form{
                max-width: 1200px;
                margin: 0 auto;
               .form-box{
                display: flex;
                gap: 2rem;
                justify-content: space-between;
                .form__group{
                    display: flex;
                    
                }
               } 
            }
        }
	}
</style>
