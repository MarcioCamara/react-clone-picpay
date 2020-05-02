import React from 'react';
import { Container, Img, Option, Title } from './styles';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const tips = [
	{
		key: String(Math.random()),
		img: img8,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a',
	},
	{
		key: String(Math.random()),
		img: img9,
        title: 'Uber',
        bgColor: '#6a0159',
	},
	{
		key: String(Math.random()),
		img: img10,
        title: 'Combos',
        bgColor: '#4139c8',
	},
	{
		key: String(Math.random()),
		img: img11,
        title: 'TV',
        bgColor: '#00ab4b',
	},
	{
		key: String(Math.random()),
		img: img12,
        title: 'Doações',
        bgColor: '#ba2f76',
	},
];

export default function Tips() {
    return (
        <Container>
            {tips.map((tip) => (
				<Option key={tip.key} bgColor={tip.bgColor}>
                    <Title>{tip.title}</Title>

					<Img source={tip.img} />
				</Option>
			))}
        </Container>
    );
}