
console.log('123');


const section_specialisation = document.querySelector('.specialisation')
const banner_info = [
	{
		id: 1,
		title: 'title1',
		button: 'text'
	},
	{
		id: 2,
		title: 'title1',
		button: 'text'
	},
	{
		id: 3,
		title: 'title1',
		button: 'text'
	},
	{
		id: 4,
		title: 'title1',
		button: 'text'
	},
]

const ourClients = [
	{
		id: 1,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 2,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 3,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 4,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 5,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 6,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 7,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 8,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 9,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 10,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 11,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 12,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 13,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 14,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 15,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
	{
		id: 16,
		url_img: './media/Clients.png',
		alt: 'clients'
	},
]
const sliderClients = document.querySelector('.sliderClients')
function renderClients(){
	const sliderImg = document.createElement('div')
	const images = document.createElement('div')
	sliderImg.classList.add('sliderImg')
	images.classList.add('images')

	sliderClients.append(sliderImg)
	sliderImg.append(images)
	ourClients.forEach(el =>{
		const img_client = document.createElement('img')
		img_client.src = el.url_img
		img_client.alt = el.alt
		images.append(img_client)
	})


}

renderClients()
const specialisation_info_for_cards = [

	{
		id: 1,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 2,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 3,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 4,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 5,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
	{
		id: 6,
		title: 'Бухгалтерское обслуживание ',
		url_img: './media/services.png'
	},
]
function renderSpecialisation(){
	for (const iterator of specialisation_info_for_cards) {
		const cardEl = document.createElement('div');
		const titleEl = document.createElement('p');

		cardEl.style.backgroundImage= `url(${iterator.url_img})`;
		titleEl.innerText = iterator.title;
		cardEl.append(titleEl)
		section_specialisation.append(cardEl);
	}

}
renderSpecialisation()

const cases_info =
[
	{
		id:1,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
	{
		id:2,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
	{
		id:3,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
	{
		id:4,
		dials:90,
		description: 'Завершено крупных сделок',
		url_text: 'Все кейсы',
		url_case: '#'
	},
]

const cases = document.querySelector('.cases')
function renderCases(){
	for (const el of cases_info) {
		const cardEl = document.createElement('div')
		const countCaseEl = document.createElement('span')
		const descrEl = document.createElement('p')
		const caseLinkEl = document.createElement('a')

		countCaseEl.innerText = el.dials;
		descrEl.innerText = el.description;
		caseLinkEl.innerText = el.url_text;
		caseLinkEl.href =  el.url_case

		cardEl.append(countCaseEl, descrEl, caseLinkEl)
		cases.append(cardEl)
	}
}
const burger_menu = document.querySelector('.burger_menu')
const dropMenu = document.querySelector('.header ul')

burger_menu.addEventListener('click', () => {
	console.log('active');
	burger_menu.classList.toggle('active')
	dropMenu.classList.toggle('show')
})
renderCases();
  
// control_slider
const banerToLeft = document.querySelector('.banner .to_left')
const banerToRight = document.querySelector('.banner .to_right')

const clientsToLeft = document.querySelector('.clients .to_left')
const clientsToRight = document.querySelector('.clients .to_right')

const reviewsToLeft = document.querySelector('.reviews .to_left')
const reviewsToRight = document.querySelector('.reviews .to_right')
banerToLeft.addEventListener('click', () => sliderControl(1,100))
banerToRight.addEventListener('click', () => sliderControl(0,100))

reviewsToLeft.addEventListener('click', () => sliderControl(1,100))
reviewsToRight.addEventListener('click', () => sliderControl(0,100))
clientsToLeft.addEventListener('click', () => sliderControl(1,100))
clientsToRight.addEventListener('click', () => sliderControl(0,100))


function sliderControl(way,width){
	if(way){
		console.log('left');
	} else{

		console.log('right');
	}
}


function modalWindow(){
	const modalWrapper = document.createElement('div')
	const modalContainer = document.createElement('div')
	const modalTitle = document.createElement('h2')
	const modalForm = document.createElement('form')
	const modalEmail = document.createElement('input')
	const modalPassword = document.createElement('input')
	const modalResetPass = document.createElement('span')
	const modalSubmit = document.createElement('button')

	modalTitle.innerText = 'Вход'
	modalEmail.placeholder = 'Your E-mail'
	modalPassword.placeholder = 'Your Password'
	

	document.body.append(modalWindow)
	modalWrapper.append(modalContainer)
	modalContainer.append(modalTitle, modalForm)
	modalForm.append(modalEmail, modalPassword, modalResetPass, modalSubmit)
}




const banner_content =() =>{
	const text_slider_win = document.querySelector('.text_slider_win')
	// const text_slider = document.createElement('div')
	// text_slider.classList.add('text_slider')
	// text_slider_win.append(text_slider)
	
		const baner_contents = banner_info.map(el => {
			<div className='slide'>
				<h1>{el.title}</h1>
				<button>{button}</button>
			</div>
		});
		return(
				<div className='text_slider'>
					{baner_contents}
	
				</div>
			)
		text_slider.append(baner_contents)
	}
	const content = banner_content()
	text_slider_win.append(content())