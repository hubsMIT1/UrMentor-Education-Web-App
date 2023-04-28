import styled from 'styled-components';

export const Box = styled.div`
padding: 40px 20px;
// padding-top:0;
background: white;
// margin-top:10px;
position: relatve;
bottom: 0;
width: 100%;
color:black;
border-top: 1px solid gray;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	// flex-wrap:wrap;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
// flex-wrap:grid;
text-align: left;
margin-left: 2rem;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;


@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
	
		minmax(200px, 1fr));
}
@media (max-width: 641px){
	display:flex;
	flex-wrap:wrap;
	gap:10px;
	justify-content:space-between;
	// align-item:center;
	
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 20px;
font-size: 1.1rem;
text-decoration: none;

&:hover {
	color: #17cf97;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 1.3rem;
color: black;
margin-bottom: 40px;
font-weight: bold;
`;
