<script>
	export let driver;
</script>

<div class="schedule-card">
	<div class="card">
        <img src={driver.driver_profile_pic} alt="drivers profile picture">
        <small>{driver.get_drivers_full_name}</small>
        <br/>
        <small>{driver.get_drivers_phone_number}</small>
    </div>
</div>

<style lang="scss">
	@import '../../styles/constant';

</style>