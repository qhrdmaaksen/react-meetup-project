/*Layout component 를 사용하는 모든 컴포넌트에 네비게이션 출력토록할 컴포넌트*/
import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
	return (
		<div>
			<MainNavigation />
			<main className={classes.main}>
				{props.children}
			</main>
		</div>
	)
}
export default Layout;