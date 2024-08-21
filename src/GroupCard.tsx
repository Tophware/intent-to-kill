import { useEffect, useState } from "react";
import { SocialGroup } from "./types";
const icons = import.meta.glob("./assets/icons/*.svg");

type GroupCardProps = {
  socialGroup: SocialGroup;
  onDismiss: () => void;
};

const GroupCard = ({ onDismiss, socialGroup }: GroupCardProps) => {
  const [iconPath, setIconPath] = useState<string | null>(null);

  useEffect(() => {
    const getIcon = async (socialGroup: SocialGroup) => {
      try {
        const iconModule = await icons[
          `./assets/icons/${socialGroup.toLocaleLowerCase()}.svg`
        ]();
        const icon = (iconModule as { default: string }).default;
        setIconPath(icon);
      } catch {
        setIconPath("./assets/icons/authority.svg");
      }
    };
    getIcon(socialGroup);
  }, [socialGroup]);

  return (
    <div className={`card ${socialGroup.toLocaleLowerCase()}`}>
      {iconPath && <img src={iconPath} alt={socialGroup} className="logo" />}
      <h1>{socialGroup}</h1>
      <div className="actions">
        <button
          onClick={(e) => {
            e.preventDefault();
            onDismiss();
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default GroupCard;
