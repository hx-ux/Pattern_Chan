<script>
	let radiusVal = [1, 100];
	radiusVal[0] = 10;

	let widthVal = [10, 20];
	widthVal[0] = 20;

	let heightVal = [0, 20];
	heightVal[0] = 20;

	let patterns=
	[
		{ value: 0, label: "circle" },
		{ value: 1, label: "rectangle" },
		{ value: 2, label: "line " },
		{ value: 3, label: "rectangle with accent" },
		{ value: 4, label: "straws" },
	];
	let patternChoice = patterns[3];




	let colorList = [
		[
			"#C47ADA",
			"#90BAEE",
			"#75BAFA",
			"#72D5BF",
			"#73DE8C",
			"#FBE66E",
			"#F5B969",
		],
		[
			"#145952",
			"#16403C",
			"#86A6A3",
			"#4C5958",
			"#BFBFBF",
		],
		[
			"#ff71ce",
			"#0./radnomize/randomizer#05ffa1",
			"#b967ff",
			"#fffb96",
		],
	];

	let bgColor = colorList[0][1];
	let patternColor = colorList[1][5];

	import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from 'sveltestrap';

  let codeModalOpen = false;
  const codeModalIsOpen = () => (codeModalOpen = !codeModalOpen);

  
  import { v4 as uuid } from "@lukeed/uuid";
  import Slider from "@bulatdashiev/svelte-slider";
  import { Styles } from "sveltestrap";
  import { Card, CardBody } from "sveltestrap";
  import { Col, Row } from "sveltestrap";
  import { Icon } from "sveltestrap";
  import Select from "svelte-select";
  import SVG from "./svg.svelte";
  
  import saveSVG from "./saveAs/saveAsSVG";
  import savePNG from "./saveAs/saveAsPNG";
  import getSVGCode from "./saveAs/getSVGCode.js";

import random from "./randomize/randomizer";

	import ColorPicker from "./colorPicker/ColorPicker.svelte";

	function handlePatternChoice(event) {
		patternChoice = event.detail;
	}

	function randomizeMe() {
	
		let colorIndex=random(1);
		radiusVal[0]=random(100,radiusVal[0]);

		if(radiusVal[0]<=5)
		{
			radiusVal[0]=10;
		}

		bgColor = colorList[colorIndex][random(colorList[0].length,5)];
		patternColor = colorList[colorIndex][random(colorList[0].length-1,5)];

		if(bgColor === patternColor)
		{
			patternColor = colorList[colorIndex][random(colorList[0].length-1)];
		}

		//fallback
		if(patternColor === undefined )
		{
			patternColor="#fffb96";
		}

		if(bgColor === undefined )
		{
			bgColor="#4C5958";
		}

		patternChoice = patterns[random(patterns.length-1)];

		console.log("pattern: "+ patternColor)
		console.log("bg: "+ bgColor)

	}

	function reset() {
		radiusVal[0] = 10;
		bgColor = colorList[0][1];
		patternColor = colorList[1][5];
		patternChoice = patterns[0];
	}
</script>

<main>
	<div class="position-relative">
	
		 <div class="position-absolute top-0 end-0">  Version: 0.0.8 Fork on  <Icon name="github" /></div>
	  </div>

	<h1 class="text-justify">PATTERN CHAN</h1>
	<Row cols={2}>
		<Col>
			<div class="shadow-lg p-3 mb-5 bg-white rounded">
				<Card>
					<CardBody>
						<p style="text-align: center;">
							<b>Background Color</b>
							<ColorPicker bind:value={bgColor} {colorList} />
						</p>
					</CardBody>
				</Card>
				<br />
				<Card>
					<CardBody>
						<form>
							<label for="patterns">Select pattern: </label>
							<Select
								id="patterns"
								items={patterns}
								ff={patternChoice}
								on:select={handlePatternChoice}
								bind:value={patternChoice}
							/>
						</form>
					</CardBody>
				</Card>
				<br />
				<Card>
					<CardBody>
						<p style="text-align: center;">
							<b> Pattern Color </b>
							<ColorPicker
								bind:value={patternColor}
								{colorList}
							/>
						</p>
					</CardBody>
				</Card>
				<br />
				<Card>
					<CardBody>
						<p><u>Pattern settings</u></p>

						<label for="radius">Radius: {radiusVal[0]} </label>
						<Slider id="radius" step="1" bind:value={radiusVal}>
							<span style="font-size: 20px;"
								><Icon name="brightness-high-fill" /></span
							>
						</Slider>
						<button on:click={randomizeMe}> Randomize </button>
						<button on:click={reset}> Reset </button>
					</CardBody>
				</Card>
			</div></Col
		>
		<Col>
			<div class="shadow-lg p-3 mb-5 bg-white rounded">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 400 200"
					svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					id="SVG"
				>
					<desc>Created with</desc>
					<rect width="400" height="400" fill={bgColor} />
					<SVG
						radius={radiusVal[0]}
						mode={patternChoice.value}
						color={patternColor}
						id={uuid()}
						cwidth={widthVal[0]}
						cheight={heightVal[0]}
					/>
				</svg>
				<br />
				<br />
				<button on:click={saveSVG}> Save as SVG </button>
				<button on:click={savePNG}> Save as PNG </button>
				<button on:click={codeModalIsOpen}> Copy SVG Code </button>
			</div>
			<br />
		</Col>
	</Row>
	<div>
		<Modal isOpen={codeModalOpen} backdrop="static" size = 'xl' toggle={codeModalIsOpen}>
		  <ModalHeader toggle={codeModalIsOpen}>Code</ModalHeader>
		  <ModalBody>
			  <code> {getSVGCode()} </code>
		  </ModalBody>
		  <ModalFooter>
			<Button color="danger" on:click={codeModalIsOpen}>Close</Button>
		  </ModalFooter>
		</Modal>
	  </div>

</main>
<Styles />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100&family=Montserrat:wght@900&display=swap");

	main {
		text-align: center;
		padding: 0.5em;
		max-width: 240px;
		margin: 0 auto;
		font-family: "Montserrat", sans-serif;
	}

	button {
		color: #000;
		background-color: #bb99ff;
		padding: 0.75em 1.5em;
		border: 2px solid black;
		border-radius: 0.25em;
		box-shadow: -0.25em 0.25em 0 #000;
		cursor: pointer;
		margin: 0.5em;
	}

	h1 {
		color: #4e7;
		text-shadow: -0.125rem 0.125rem 0 #b5f;
		font-size: 3.25rem;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
