import {PropsWithChildren} from "react";



export default function DashboardLayout(props: PropsWithChildren) {
	return <main>
		{props.children}
	</main>
}