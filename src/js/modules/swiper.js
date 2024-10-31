import Swiper from 'swiper/bundle'

function swiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 'auto',
		spaceBetween: 24,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
}
export default swiper
