import { Radio, MessageCircle, Lock } from 'lucide-react'

const features = [
  { icon: <Radio size={16} />, text: "Voice rooms with screen share" },
  { icon: <MessageCircle size={16} />, text: "Threaded channels & DMs" },
  { icon: <Lock size={16} />, text: "Google sign-in, no passwords" },
]

const FeatureList = () => {
  return (
    <div className="flex flex-col gap-3">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-ink-muted">{f.icon}</span>
          <span className="text-sm text-ink-muted">{f.text}</span>
        </div>
      ))}
    </div>
  )
}

export default FeatureList