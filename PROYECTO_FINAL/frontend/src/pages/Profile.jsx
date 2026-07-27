import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import UsernameForm from "../components/UsernameForm";
import PasswordForm from "../components/PasswordForm";
import AvatarForm from "../components/AvatarForm";

const Profile = () => {
	const { user } = useAuth();
	const [message, setMessage] = useState("");

	return (
		<section className="flex flex-col gap-8 max-w-3xl mx-auto">
			<header className="flex items-center gap-4">
				{user?.avatar && (
					<>
						<img
							src={user.avatar}
							alt={user.username}
							className="w-20 h-20 rounded-full object-cover border border-secondary/20"
						/>
						<div className="flex flex-col gap-1">
							<h1 className="text-md font-serif font-bold">Profile</h1>
							<p className="text-secondary/60">{user.username}</p>
						</div>
					</>
				)}
			</header>
			{message && (
				<p className="px-4 py-3 rounded-lg bg-highlight/15 text-highlight">
					{message}
				</p>
			)}
			<div className="grid gap-6 md:grid-cols-2">
				<UsernameForm onMessage={setMessage} />
				<PasswordForm onMessage={setMessage} />
				<AvatarForm onMessage={setMessage} />
			</div>
		</section>
	);
};

export default Profile;
