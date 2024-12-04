import { useRive } from "@rive-app/react-canvas";
import switchRive from "../../assets/rive/switch.riv";

const SwitchRive = () => {
  const { RiveComponent } = useRive({
    src: switchRive,
    stateMachines: "ThemeSwitch",
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent style={{ width: 64, height: 40 }} />
    </div>
  );
};

export default SwitchRive;
