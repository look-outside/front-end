import React from "react";
import styled from "styled-components";
import FreePosts from "../../components/free_posts/FreePosts";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ImagePosts from "../../components/image_posts/ImagePosts";

const DUMMY_FREE_POST = [
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 1,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 2,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 3,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 4,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 5,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 6,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 7,
	},
	{
		title: "다...날아갔네",
		nickName: "우주맛 젤리",
		city: "울산",
		district: "울주군",
		id: 8,
	},
];

const DUMMY_Image_POST = [
	{
		title: "다...날아갔네",
		city: "울산",
		district: "울주군",
		image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRIYGBURERERERURERERERERGBQZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQrJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAMhAAAgECBQIFAQgDAQEAAAAAAAECAxEEEiExQVFhE3GBkaEUBSJCUrHB0fAy4fGSFf/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EADIRAAICAQMDAgMFCQEAAAAAAAABAhEDEiExBBNBUWEUMlIigZGh0QVCYnGiscHh8BX/2gAMAwEAAhEDEQA/APTqJeU2woKxJUT1dSPNoxSiCoj5wAk1YKFaFuVxc0W2U2MAAtF5QoxM2MkDFjoVAMhFE1m0jHVIqgpxCjE1oRxY9TCzg5NNwEwMyGZi0xZcWAdIJgSGIp0xQ0JaAY5xFyQwjAbAbCaKcAisWwRjiVkGEBsXFF5SBABMROQyYhhEYMpAsPKU0MLQplpltEyBFYLZIovIWEUqxCXIYB6mFfdPcX9R1LqZTNM5Ekemx8qqZmmiXLbGoUTIG4UikhjUWmNixSQyKFkh4MYQiCURRxYLY6UQHEKYrsGNRl5inEiQRaZeYKDAGRMamOp9WDKZM2lhbAaiSkLYTBNZtJTZRbYLCK4lsFlMlwiuIMmLkMbAkhhGhbQLiNsAwisBoW0NkAxkIyspIwLAlPgIhTBkwXIG4wrLIVcgRTu5yOZnTGJHMekmWFcAtMFhq+CMGQbBaMmM0SJopx6iIhXMzJNGjMkUpmVSHRQg63HIpwLUg4gsahGUkoj8oEomcjKFmdlphyiCohsVwdjEXlJCAbiLY9IVJCmOnEHw2FNIDTfCE2CUB0aYdgOYY4r5MrgU4GqSQrKbWF4UIcRch80Z5FIyshPHpAlIEJoCTKI5mBJgp9SpAyHJNknLuLbIwcwyJsu4EgsxTCLQBAiBBR3Y0+wTRob9gPQ4FNntvDH1E5CrDsoDiNqE0UAkE4FpEQGx0gHEG1hrRVg2DQJuNgyZC4xBZlCh0ENjoKhO2geYA6Q6LFzYKkRxFHS9BU2VFDsgSSQVJAljfLCpDG7gpdAl5CyYYQvdgNFOIzKypXB7j+wnKRoZCfYJyRnKjdu1dmVxJJGi8SlKLNr9jLGl5MkjLNm+ukYpQLQZzZ0+BMgJDZQAlBldRyODESEsfKAqQydk3FJ7ipoBhtMpoeyMo+gCLuXlJkGFUWVcgXhENaNoZ6mnKPEPVu/wDVfRfAE1bb+AYyfU4HHez2lktV+haiTIMhURohJdEJKTRWMYvyY1AfCCJOnrdBJ24FbbGjFJkdK/PwZZwaZsv3Ez3NG0ael8GewcYhTRUUVsjpKcC4xGJDYx7iuQ6h6i4IJoblFzJ2yySSBbFuQbiLlTKKJGWS+A3VtyB476iZIW2OoIjLMzoUqncucznwqMbCVx9CId2Rpi+gFWL/4XGmEox6i0k7KxlKSozpM00qEuQZOJaxMl5GkpNfZNCUIupsqtTYjwh9asnsLnL0Ejq8lpdu3W9CZQQqcR7nFdxU6y6FEn6EJSgvJmnTAdAfKqVqyqTOeU4eNzJKmBKmbfDBdMYi5WY1T7BKkacoMmHc1RA8IhMxDbhpHbqRvr7CHAZCdhsHFnI3R6EI2IhEeos0QoJ6oeqaRB5dzqjh2MWoMkzZKGugLgxtaF7bXBlVw1Af4fUGZnL0Co+oqVMDIFKQDkDcbag0i4wXIiVQp1iigyU8qRrlPhApX3M0Kl9jRGdt2HRRJ5b4CdPuJqSQVV9xDsFUhVqYmbuBKA9IFxG1m7ViFEbTQLKVyltkZJRNM6jsLzspSZLG2QqUmXmGQq24uKsAwbMZQlF2Mq1lwhMplTFNhil4FnqfITkBJlOQuTKEHsGh6mkjIpWJmYRKHuoDKoDCAapmGUQHIBjnAmQA6oTYsLIUY1o6Ks9mMhTkna25ipvodLDT6nNJHbFnWow0XbgZOhyYqFdx50NVHFddV+xzyg72KRy+pJUAHF9DZCtCWmwupSlfbQlpl5OiOaBinKwifkaqkkt0/iwqdWL5XqMrXgpcZcSRn8MpwRcqT4afqKlJ22Krfgk3pW4mqIkHUmzO2zpitjz5yTY+lK242dVcGeMbhuklzfyuF15MrXA3O2WgIOwfiLZCtIZSa8kkhU5BSlfYkUr2CoivNeyJFDIRXQOUNNC09NjMC3K8JE8AZGLLlMVlFKjPOmhTgaXrwRQBx5Gbb4RknSFumdBwEzgbWkHtSZhlTFSgbJwFypjqaJvEzG4h04miOHuNjSS8w91A+HfLEqNg4pjLBxDqYrglwDGC5AnYbIVKJtQvbYrKiEyFDWgdpjaUDTDRGam7DZVCFWzpb0o2Q15Lc8vJni7q+ZLst/bgB/2+hthdMtjWsU7nQp49ZbO/pycLONjUtqCUEwQs7U7Sjo/e7aOZXp2JSxOu/uavqoW1jd9hKaKJmCOYfGTta38hZoyfRG7DUIdU1be6uZuuTNnGq0n0sJnSS8zu1sNFa338mY54eL0WvVspGaZBpnLQZrlhdQHStuPdgMswP7uOqoQ4jIRsZCPf8AU0RoP/auY0x8az6glfgpj0PlG+EHtb1Gqi3wZYYuS6eyNEcVI55OfsdkMWJ+o1UmU6KLVa4amT1T8lVjxrhC/CRfhouTBYtsqooCURE4GmTS3M9SslsZW+Atxj8wp0isiRTqNgyRVY35ZB54/uoubX/BeUZCJbsUSSIyk5MHwwlAkJoNTXUzsycEDkAlTGSrxQuWIAoSGeWHkX4RCeIQfTIn3MfoJjJBOsrGaSZSfYFG3XBartO8X8D41G92JlRfArI0M2mTUZLng3KtJbOwidWT3dwI1NNUC5ipIaTb8jYSGRm1yZ4ajXTaM2gqOw3x5X3NuHxDWqdjnRi97DI1H0BYdD8nRlinzYBYlp6ewqD01aI2hdXoFYVyao1tb31F1m2waSVx0oxte+oHkSDHp738HPqNrde+wDqp/g18mdJSiltr3JKsn+E3ff0/mP8ACr66+45jT/L8FQT4T9jY9eLB024jd5+gi6ZXyxEISfH7Bxb/AKxtSpf+ELprqBSvkZ464djYtjYzFXRTqKwr9iseNzV4wqVYxyxHRC5TfUKxCyzKPA2pW1FTrIW7sVKJdQRySzPkd9SUsSZZ02Kaa4+CihFnPLNNeDfLEiZYkxzrF0lcdQSISzyZsjWLlU7iJQaESYdIjyvybXVSFyxBlc7gxi+djaUBZZPg1eJ3ILyRILaLVL1X4nVhTi9np33DWHXY4lOclyOWIl1OR434Z6qzqt0dN0WBKnbczwxk+uhtTU1e9vMm9UeSsXGfBklBPsSnhE9mBVwj3zfJdGMlohr22YumnujRDDJO+/loaVDsYvCnvf5NVGDityUn7lYL2GypabGaUWvwmn6jLq9QvGur5RVKS8FHCL87majSvuFKnbQmLrOMVlXn2OfVnJ2eqKRuW5GemKqtzoZklrp56FTxcVz8GaniHLRrUZXwmZL7yT5VtA0r+0C5NXAt42HUZCurXsvezMz+y9Lp3flYCj9ny/7sPWNrkS8yfym9yT5MdWq07Cp4ealpd91sZq2dOzvcfHD3JZcm26ZrWID+pOemyeIV7SOd9RNLY2zxEnsxeZvkzRkNjUtyNpS4IvNJ8sdGTGxfYy+OiPFA0m7prnUVu4EZdTG8SLnigqAssp0HJcf7Akct4h9QvHkNoQndl4Ncqa9SkmuwhVpFSnJjEmm2PkurE5U32Eyk+WRT7hF0Nj5RitmBmFqaCWuxrGWO+Bt2QrI+pBdSL9p+5qlSQUKSIkzRSj0i2zicqPVjG96Kjh2hqpdUPhB2vJBPTj5JOTZZJIQqHRegUItfhGeKuuxUazvtp2FbkMlEZGLttr0KUJPdDM2bZ2Jll1+Tkn1E4P5GdkcEJLaQmrRutQqdNpWGOT/qKVR9P1BLqor7LCumd2mLlSl29iOlfeJojUQKl1khlntbUD4fenYvwILjXsGqF9noNbvytNhmZPj2J92a3bQ7xQ+kXGhZWT9QpRRbkuvuLtr+g3ddqxe0q+yLcLmPExXMb9zowgDOC5RaOdJkZ9M5I4c6alpaz7GaeFktr+x2J4VvsCsG+rb7nbHqEtrPOn0erx/g5CpNbu2l9tREn3O/9K+UvQqGEXReiKLqYkX0EnsjgOTS2dtk+ALs72KisrUnddOUzh10r/dvbvuWx5dfg583S9vl/qCo9WT7qEuMuNS/pp/leu2jKNryyahJ/JH8h/iLsgfHiSOCls2o6fiuMjhIJatX41a87ia8a/0U+HzS52/mJliEKeI8xyowvvzpaRcMOnra/Ns0f03H1xRNdPOQidW6MuSR3KODpLeVm0nZt3Wm2g+jCG2aL6Xtp6on8SlwmW/85za1SS+84cUzTTi+TuKjST/yp3a2/rLtSf8Ai4PXVbE/idX7rLPoFBbzX/fecvxV+X5KO1lh+WH/AKX8EB3f4X+Ie0vr/pZy6fW51/s6pFuzXqUQllVxZbC6kdp4fS6t/sRL7Ok9W/nQhDg1OPB1t2xU8AkDDDK5CFLdAjyMVK3IMqqWy9yEFSt7lW3FbAwlfdWLdtiiEcmKDvYtDLOluSTiv6wrRtfvYhAQ6fHOKtDyyyTaHwp09ne/Nro3UsPSa0zfuiENHFCK2RyTyz1VbMmIoRi9Nu6ExjF669uhCENctTVnZBXGx6jppr8Au/Kv7EIXjvsSl5YmprokZpJrkhCPUx0bp+p04JuS3BVR+3cXNtlkIYpSzQSk/wC36HQkou0DZSVpLXhmeeWO8H6NMhDv/Z05ZcdSZw9ZFRepITPERs7ReZbXfHmmZK1ab1zW203+SEPWjjjF8Hiyzzmnb/DYyylJ7u/d7i50r+bIQ6E64OFrV824awby3t8oun9mzeuiT7lEIyzTXB14ukxTav0Gf/Mfn7IOP2XJce7X7EISfUZDqh+z8DfA2h9lSlytODVRwX3sqtfYhDLNNuSfgnLpcUVBpcujV9DbkohCfdkU+Hx+h//Z",
		id: 1,
	},
	{
		title: "다...날아갔네",
		city: "울산",
		district: "울주군",
		image: "data:image/jpeg;base64,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",
		id: 2,
	},
	{
		title: "다...날아갔네",
		city: "울산",
		district: "울주군",
		image: "data:image/jpeg;base64,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",
		id: 3,
	},
	{
		title: "다...날아갔네",
		city: "울산",
		district: "울주군",
		image: "data:image/jpeg;base64,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",
		id: 4,
	},
];

const Home = () => {
	return (
		<ContainerTag>
			<FreePostAndMapTag>
				<FreePostTag>
					<SectionHeaderTag>
						<SectionTitleTag>
							<h2>오늘 뭐 입지?</h2>
						</SectionTitleTag>
						<Link to="/today_clothes/free">
							<span className="more">
								더보기 <AiOutlineCaretRight />
							</span>
						</Link>
					</SectionHeaderTag>
					<FreePosts
						posts={DUMMY_FREE_POST}
						path="/today_clothes/free"
					/>
				</FreePostTag>
				<MapTag>
					<SectionHeaderTag>
						<SectionTitleTag>
							<h2>지도</h2>
						</SectionTitleTag>
					</SectionHeaderTag>
					<Map></Map>
				</MapTag>
			</FreePostAndMapTag>

			{/* 오늘의 옷 - 데일리 룩 */}
			<ImageListTag>
				<SectionHeaderTag>
					<SectionTitleTag>
						<h2>데일리 룩</h2>
					</SectionTitleTag>
					<Link to="/today_clothes/dailylook">
						<span className="more">
							더보기 <AiOutlineCaretRight />
						</span>
					</Link>
				</SectionHeaderTag>
				<ImagePosts
					posts={DUMMY_Image_POST}
					path="/today_clothes/daily"
				/>
			</ImageListTag>
			{/* 오늘의 하늘 */}
			<ImageListTag>
				<SectionHeaderTag>
					<SectionTitleTag>
						<h2>오늘의 하늘</h2>
					</SectionTitleTag>
					<Link to="/today_sky">
						<span className="more">
							더보기 <AiOutlineCaretRight />
						</span>
					</Link>
				</SectionHeaderTag>
				<ImagePosts posts={DUMMY_Image_POST} path="/today_sky" />
			</ImageListTag>
			{/* 오늘의 모임 */}
			<section>
				<SectionHeaderTag>
					<SectionTitleTag>
						<h2>오늘의 모임</h2>
					</SectionTitleTag>
					<Link to="/today_meeting">
						<span className="more">
							더보기 <AiOutlineCaretRight />
						</span>
					</Link>
				</SectionHeaderTag>
				<FreePosts posts={DUMMY_FREE_POST} path="/today_meeting" />
			</section>
		</ContainerTag>

	);
};

export default Home;


const ContainerTag = styled.div`
	padding: 0 2em;
	display: grid;
	row-gap: 5em;
	@media screen and (min-width: 1160px) {
		max-width: 1160px;
		margin: 0 auto;
	}
`;

// 지도 때문에 고정 height 필요할듯?
const FreePostAndMapTag = styled.section`
	display: flex;
	flex-direction: column-reverse;
	row-gap: 2em;
	height: 100%;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		column-gap: 2em;
		row-gap: 0;
	}
`;
const FreePostTag = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 50%;
	height: 100%;
`;

const MapTag = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 50%;
`;

const SectionHeaderTag = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1em;
	.more {
		color: skyblue;
		display: flex;
		align-items: center;
		cursor: pointer;
		font-size: 0.7rem;
	}
	@media screen and (min-width: 400px) {
		.more {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 500px) {
		padding: 0em 1.2em;
	}
	@media screen and (min-width: 875px) {
		.more {
			font-size: 1rem;
		}
	}
`;

const SectionTitleTag = styled.div`
	border: 5px solid skyblue;
	border-bottom: 0;
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;
	padding: 0.4em .8em;
	color: darkblue;
	font-size: 0.72rem;
	font-weight: 800;
	@media screen and (min-width: 400px) {
		font-size: 1rem;
		padding: 0.4em 1.1em;
	}
	@media screen and (min-width: 875px) {
		font-size: 1.3rem;
		padding: 0.5em 1.3em;
	}
`;

//  나중에 컴포넌트 분리
const Map = styled.div`
	background-color: skyblue;
	width: 100%;
	height: 100%;
	border-radius: 15px;
`;

const ImageListTag = styled.section``;
