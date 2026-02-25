'use client';
import CardSection   from '@/app/[user]/[product]/(CardSection)/_index';
import HeaderSection from '@/app/[user]/[product]/(HeaderSection)/_index';
import ShowcaseSection
					 from '@/app/[user]/[product]/(FeatureShowcaseSection)/_index';
import VendorSection from '@/app/[user]/[product]/(VendorSection)';
import { Lightbulb } from 'lucide-react';



const content = [
	{
		'heading'    : 'Heart of a Legend: Supercharged 6.2L HEMI® V8',
		'description': 'Experience the bone-shaking thrill of up to 807 horsepower. This isn\'t just an engine; it\'s an adrenaline-delivery system that ensures you’re the fastest thing on the asphalt, providing instant torque that leaves the competition in the rearview.'
	},
	{
		'heading'    : 'Total Command: Six-Piston Brembo® Braking System',
		'description': 'Power is nothing without control. Massive 15.7-inch slotted rotors and six-piston front calipers provide elite stopping power, giving you the confidence to push the limits on the track while maintaining absolute safety on the street.'
	},
	{
		'heading'    : 'Ice in the Veins: SRT Power Chiller™ Technology',
		'description': 'Keep your performance peak even when the heat is on. By redirecting air conditioning refrigerant to cool the engine\'s intake air, this track-ready tech ensures sustained maximum horsepower for back-to-back runs without power fade.'
	},
	{
		'heading'    : 'Telemetry at Your Fingertips: Uconnect® Performance Pages',
		'description': 'Master your machine with real-time data. Monitor G-force, 0-60 times, and engine dyno stats directly on your dash. This deep technical insight allows you to fine-tune your driving style and shave seconds off your personal bests.'
	},
	{
		'heading'    : 'Intimidating Presence: Signature Widebody Design',
		'description': 'Command every corner with an additional 3.5 inches of fender width and 11-inch wide wheels. The aggressive stance isn\'t just for looks—it provides superior mechanical grip and stability, ensuring your Hellcat handles as well as it accelerates.'
	}
].map((item) => {
	return { ...item, icon: <Lightbulb size={ '48' }/> }
})

export default function ProductPage() {
	return <div className={ 'w-full max-w-7xl h-fit mx-auto' }>
		<main
			className={ 'snap-proximity snap-y' +
						' snap-always [&>section]:snap-start scroll-smooth' }
		>
			<HeaderSection/>
			<VendorSection/>
			<CardSection>
				<CardSection.Layout_1>
					<CardSection.Layout_1.Content
						heading={ '' }
						description={ '' }
					/>
					<CardSection.Layout_1.CardsGrid cardContents={ content }/>
				</CardSection.Layout_1>
			</CardSection>
			<ShowcaseSection>
				<ShowcaseSection.Layout_1>
					<ShowcaseSection.Layout_1.ImageGallery>
						<ShowcaseSection.Layout_1.ImageGallery.Image
							src={ '/engine.png' }
							alt={ 'hellcat engine' }
							position={ {
								top : 6,
								left: 6
							} }
							size={ {
								width : 300,
								height: 360
							} }
						/>
					</ShowcaseSection.Layout_1.ImageGallery>
					<ShowcaseSection.Layout_1.Content
						heading={ 'Organs' +
								  ' Specially' +
								  ' Designed' +
								  ' for the' +
								  ' Beast' }
					>
						<ShowcaseSection.Layout_1.Content.Bulletpoint
							heading={ 'Twin Turbo Breather' }
							description={ 'High energy needs high input.' +
										  ' Raging beast cannot perform without a oxygen.' }
						/>
					</ShowcaseSection.Layout_1.Content>
				</ShowcaseSection.Layout_1>
			</ShowcaseSection>
		</main>
	</div>
}
