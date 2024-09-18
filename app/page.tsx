import data from '../store/faqs.json';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Data Display</h1>
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl duration-500">
              <h2 className="text-xl font-semibold text-blue-500">{item.Q}</h2>
              <p className="text-gray-700">{item.A}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
