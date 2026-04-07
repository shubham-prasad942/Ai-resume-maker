// ModelViewer.js
const ModelViewer = () => {
  return (
    <model-viewer
      src="/model/robot.glb"
      loading="lazy"
      className="w-full h-60 sm:h-80 md:h-90 pointer-events-none"
      autoplay
      animation-name="*"
      disable-zoom
      disable-pan
      interaction-prompt="none"
    />
  );
};

export default ModelViewer;
