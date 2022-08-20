<script>
	export let passenger;
</script>

<div class="schedule-card">
	<div class="card">
        <img src={passenger.passenger_profile_pic} alt="passengers profile picture">
        <small>{passenger.get_passengers_full_name}</small>
        <br/>
        <small>{passenger.get_passengers_phone_number}</small>
    </div>
</div>

<style lang="scss">
	@import '../../styles/constant';

</style>