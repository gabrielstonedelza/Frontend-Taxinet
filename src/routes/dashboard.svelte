<script>
	import { fly } from 'svelte/transition';
    import axios from 'axios';
	import { goto } from '$app/navigation';
    import { token } from "../routes/stores"
    let tokenValue;
    token.subscribe(value => {
        tokenValue = value
    })

    const handleLogout = async ()=>{
        const logoutUrl = "https://taxinetghana.xyz/auth/token/logout";
        axios({
			method: 'POST',
			url: apiUrl,
			data: {
				full_name: name,
				email: email
			},
			headers: { 
                'Content-Type': 'multipart/form-data' ,
                'Authorization': 'Token '
            }
		})

    };
    
</script>

<svelte:head>
	<title>Taxinet | Dashboard</title>
</svelte:head>

<section class="home" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>

</section>