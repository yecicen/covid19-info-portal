type Props = {
  title: string;
  icon: JSX.Element;
};

export default function SymptomCard({ title, icon }: Props): JSX.Element {
  return (
    <div className="bg-white rounded inline-flex">
      <div className="p-4 flex items-center">
        <div className="p-2 rounded-full flex items-center justify-center bg-teal-600 print__symptom-icon">
          {icon}
        </div>
        <h4 className="text-xl font-medium flex items-center ml-2 leading-snug print__font-black">
          {title}
        </h4>
      </div>
    </div>
  );
}
