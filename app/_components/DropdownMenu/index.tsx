import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/themes";
import LogoutButton from "../LogoutButton";

type Props = {
  profile: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export default function DropdownMenu({ profile }: Props) {
  const link = [
    { text: "マイページ", href: "/mypage" },
    { text: "本棚を閲覧する", href: `/bookshelf/${profile?.name}` },
    { text: "本棚の編集", href: "/bookshelfEdit" },
    { text: "お気に入りリスト", href: "/favorite" },
  ];
  return (
    <>
      <RadixDropdownMenu.Root>
        <RadixDropdownMenu.Trigger asChild>
          <button type="button" className={styles.userCntainer}>
            {profile?.image ? (
              <Image className={styles.userIcon} src={profile.image} height="30" width="30" alt="" />
            ) : (
              <span className={styles.icon}>
                <PersonIcon className={styles.dummyIcon} />
              </span>
            )}
            <span className={styles.userName}>{profile?.name}</span>
            <ChevronDownIcon />
          </button>
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Content asChild>
          <div className={styles.dropdownMenuContent}>
            <ul className={styles.dropdownMenuList}>
              {link.map((li, index) => {
                return (
                  <li key={index} className={styles.listItem}>
                    <Link className={styles.link} href={li.href}>
                      {li.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={styles.logoutButtonArea}>
              <LogoutButton />
            </div>
          </div>
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Root>
    </>
  );
}
