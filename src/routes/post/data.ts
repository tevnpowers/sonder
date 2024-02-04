import { Access, Genre, type Post } from "$lib/types";

export const posts: Post[] = [
	{
		id: '0',
		name: "Humpty Dumpty",
		author: "Unknown",
		description: "The story we all know and love.",
		genre: [Genre.Children],
		connections: [{ id: '1'}, { id: '2'}, { id: '3'}],
		html: `<p>Humpty Dumpty sat on a wall,</p>
				<p>Humpty Dumpty had a great fall;</p>
				<p>All the king's horses and all the king's men</p>
				<p>Couldn't put humpty together again</p>`,
		access: Access.public,
		published: true,
		votes: 0,
		score: 0
	},
	{
		id: '1',
		name: "The Rise and Fall of King Humpty",
		author: "ChatGPT",
		description: "It was all a dream: An alternative story of Humpty Dumpty",
		genre: [Genre.Children],
		connections: [{ id: '0'}, { id: '2'}, { id: '3'}],
		html: `<p>Once upon a time in the kingdom of Egglantia, there ruled a monarch whose name was known far and wide: King Humpty. He wasn't just any king; he was the epitome of regality, with a rotund figure and a heart as golden as his crown.</p>
		<p>King Humpty presided over his kingdom with wisdom and kindness. His subjects adored him, for he always had time to listen to their concerns and offer his sage advice. Under his reign, Egglantia flourished, and peace reigned supreme.</p>
		<p>However, there was one peculiar aspect of King Humpty's appearance that set him apart from other monarchs—he was, quite literally, an egg. His oval-shaped body and smooth shell made him an unusual sight, but his subjects never judged him for his unique form. To them, he was simply their beloved ruler.</p>
		<p>Yet, despite the admiration of his subjects and the prosperity of his kingdom, King Humpty harbored a secret fear—a fear of falling. For in Egglantia, there existed a tale as old as time itself, a cautionary nursery rhyme whispered by mothers to their children:</p>
		<p>"Humpty Dumpty sat on a wall,</p>
		<p>Humpty Dumpty had a great fall.</p>
		<p>All the king's horses and all the king's men</p>
		<p>Couldn't put Humpty together again."</p>
		<p>The rhyme haunted King Humpty's dreams, a reminder of his vulnerability and mortality. He feared that one day, he too would suffer a great fall, and no one would be able to mend him.</p>
		<p>As time passed, King Humpty's anxiety grew, casting a shadow over his once joyful reign. His advisors tried to reassure him, but the king's fears persisted, like a crack slowly spreading across his shell.</p>
		<p>Then, one fateful day, as the sun bathed Egglantia in its golden light, tragedy struck. King Humpty, in a moment of careless abandon, ventured too close to the edge of his castle's wall. With a resounding crack, he lost his footing and tumbled to the ground below.</p>
		<p>The kingdom stood still as news of the king's fall spread like wildfire. The people wept for their beloved monarch, fearing that the nursery rhyme had finally come to pass.</p>
		<p>But amidst the chaos and despair, something miraculous happened. The king's loyal subjects, united in their love for their ruler, rushed to his side. They gathered up the broken pieces of their fallen king, cradling him in their arms with tenderness and care.</p>
		<p>For days and nights, the people of Egglantia labored tirelessly, using all their skill and ingenuity to mend their shattered king. They worked together, each contributing a piece of their own, until at last, King Humpty stood whole once more.</p>
		<p>As he looked upon the faces of his devoted subjects, King Humpty felt a warmth fill his heart—a warmth born not of fear, but of love and gratitude. In that moment, he realized that it was not the fall that defined him, but the love and unity of his kingdom.</p>
		<p>From that day forth, King Humpty ruled Egglantia with even greater compassion and wisdom. The nursery rhyme still echoed in the hearts of his people, but it was no longer a tale of tragedy. Instead, it became a testament to the resilience of their beloved king and the enduring power of love to mend even the most broken of souls.</p>
		<p>And so, in the kingdom of Egglantia, the story of King Humpty lived on—a story of courage, redemption, and the triumph of the human spirit.</p>`,
		access: Access.public,
		published: true,
		votes: 0,
		score: 0
	},
	{
		id: '2',
		name: "The Steed's Loyalty",
		author: "Chat GPT",
		description: "They only miss you when you're dead and gone.",
		genre: [Genre.Children],
		connections: [{ id: '0'}, { id: '1'}, { id: '3'}],
		html: `<p>In the lush green meadows of the kingdom of Humptopia, there grazed a magnificent horse known far and wide as Noble. With a coat as white as snow and eyes as bright as stars, Noble was the pride of King Humpty's royal stables.</p>
		<p>Noble wasn't just any horse; he was the faithful companion of King Humpty, his trusted steed who bore him through the vast expanse of his kingdom with grace and swiftness. Together, they roamed the rolling hills and towering forests, their bond unbreakable as the dawn.</p>
		<p>As the sun rose over the horizon, painting the sky in shades of pink and gold, Noble would stand tall and proud, ready to carry his beloved king wherever his heart desired. Together, they would journey to the farthest reaches of Humptopia, exploring its hidden wonders and basking in the beauty of nature.</p>
		<p>But amidst the tranquility of their idyllic kingdom, a shadow loomed—a shadow known as the Wall.</p>
		<p>The Wall was a towering structure that encircled the kingdom, separating Humptopia from the unknown lands beyond. It was said that beyond the Wall lay great danger, lurking in the shadows like a silent predator.</p>
		<p>King Humpty, curious by nature, often gazed upon the Wall with longing in his heart, wondering what mysteries lay beyond its ancient stones. But he dared not venture too close, for the Wall was treacherous, its secrets known only to the wind.</p>
		<p>One fateful day, as the sun hung high in the sky and the meadows danced with wildflowers, King Humpty made a decision that would change the course of his kingdom forever. He resolved to climb the Wall, to see with his own eyes what lay beyond the kingdom's borders.</p>
		<p>With a heavy heart and a sense of trepidation, King Humpty mounted Noble, his loyal steed, and set out towards the Wall. The journey was long and arduous, the air thick with anticipation and uncertainty.</p>
		<p>But as they drew closer to the Wall, disaster struck. King Humpty, blinded by his curiosity, lost his footing and tumbled from Noble's back, crashing to the ground below with a resounding thud.</p>
		<p>Noble, loyal to the end, watched in horror as his beloved master fell, his heart heavy with grief. But even as King Humpty lay broken and bruised, Noble refused to abandon him. With a strength born of love and loyalty, Noble galloped to his side, his hooves pounding against the earth like a drumbeat of hope.</p>
		<p>Together, they faced the Wall, their spirits unbroken despite the odds. And as the sun dipped below the horizon, casting long shadows across the land, King Humpty and Noble stood side by side, their bond stronger than ever before.</p>
		<p>For in the kingdom of Humptopia, amidst the meadows and the forests, there existed a love that transcended time and space—a love between a king and his horse, a love that would endure for all eternity.</p>`,
		access: Access.public,
		published: true,
		votes: 0,
		score: 0
	},
	{
		id: '3',
		name: "The Origin of Humpty",
		author: "Chat GPT",
		description: "This short story provides background into the life and times of Humpty Dumpty.",
		genre: [Genre.Children],
		connections: [{ id: '0'}, { id: '1'}, { id: '2'}],
		html: `<p>In the quaint village of Eggshire, nestled amidst rolling hills and fertile farmland, there lived a humble egg farmer named Harold. Harold was known throughout the village for his gentle nature and his skill in caring for his beloved hens, whose eggs were prized far and wide for their exceptional quality.</p>
		<p>One crisp autumn morning, as Harold tended to his flock, he noticed something peculiar—a lone egg, larger and rounder than the others, nestled snugly in the straw. Curiosity piqued, Harold approached the egg, his hands trembling with anticipation.</p>
		<p>As he cradled the egg in his weathered palms, he felt a strange warmth emanating from within, as if it held a secret waiting to be revealed. With great care, Harold carried the egg to his farmhouse, where he placed it gently in a nest of soft feathers, shielding it from the chill of the autumn breeze.</p>
		<p>Weeks passed, and still, the egg remained nestled in its cozy nest, guarded by Harold's watchful eye. Each day, he would tend to it with the utmost care, whispering words of encouragement to the life growing within.</p>
		<p>Then, one magical morning, as the sun rose over the horizon, the egg began to tremble, its shell cracking open like a flower in bloom. And from within emerged a creature unlike any Harold had ever seen—a talking egg, with eyes as bright as the morning sun and a smile that lit up the room.</p>
		<p>"I am Humpty," the egg proclaimed, his voice as gentle as a summer breeze. "And I am here to bring joy and laughter to the world."</p>
		<p>From that day forth, Humpty became a beloved member of the village of Eggshire, his cheerful presence lighting up even the darkest of days. Children would gather around him, listening with rapt attention as he regaled them with tales of faraway lands and daring adventures.</p>
		<p>But despite his sunny disposition, Humpty could not shake the feeling of loneliness that gnawed at his heart. He longed to explore the world beyond Eggshire, to discover its hidden wonders and forge new friendships along the way.</p>
		<p>And so, one fateful day, with a heavy heart and tears in his eyes, Humpty bid farewell to the village he called home, setting out on a journey of discovery and self-discovery.</p>
		<p>Along the way, he encountered many wonders—a talking cat who danced in the moonlight, a wise old owl who spoke in riddles, and a mischievous fox who taught him the true meaning of friendship.</p>
		<p>But it was not until he stumbled upon the kingdom of Egglantia, with its rolling hills and towering castles, that Humpty truly found his place in the world. For in Egglantia, he discovered a kingdom filled with love and laughter, where he was welcomed with open arms and warm smiles.</p>
		<p>And so, in the kingdom of Egglantia, amidst the laughter of children and the songs of birds, Humpty found his true home—a home filled with love, laughter, and the promise of new adventures yet to come.</p>`,
		access: Access.public,
		published: true,
		votes: 0,
		score: 0
	},
]