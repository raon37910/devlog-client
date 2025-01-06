import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
	const isLoggedIn = false;

	return (
		<header
			className="
			fixed top-0 left-0 right-0 z-50
			bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b px-20">
			<div className="flex h-16 items-center justify-end">
				{/* Left:로고 및 문자 TODO 로고 교체 예정 */}
				<div className="flex items-center gap-2 mr-auto">
					<a href="/" className="flex items-center space-x-2">
						{/* 로고 */}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
								 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
							<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
							<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
						</svg>
						{/* 타이틀 */}
						<span className="font-bold text-xl">Devlog</span>
					</a>
				</div>

				{/* Right: Sign up, Login, Profile */}
				<div className="flex items-center gap-4">
					{isLoggedIn ? (
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@user" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					) : (
						<>
							<Button variant="ghost" size="sm">Sign up</Button>
							<Button size="sm">Sign in</Button>
						</>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;