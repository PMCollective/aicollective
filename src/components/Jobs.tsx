import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Building,
  Clock,
  ExternalLink,
  Briefcase,
  ArrowLeft,
  Users,
  Calendar,
} from "lucide-react";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/ydla7z4z7edks";

export default function JobPostings() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(SHEETDB_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch data: ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message || "Failed to load data"))
      .finally(() => setLoading(false));
  }, []);

  const truncate = (text: string, len = 50) =>
    text?.length > len ? `${text.slice(0, len)}...` : text;

  const getFieldIcon = (field: string) => {
    const f = field?.toLowerCase() || "";
    if (f.includes("company"))
      return <Building className="w-4 h-4 text-blue-600" />;
    if (f.includes("location"))
      return <MapPin className="w-4 h-4 text-emerald-600" />;
    if (f.includes("time") || f.includes("date"))
      return <Clock className="w-4 h-4 text-amber-600" />;
    if (f.includes("link"))
      return <ExternalLink className="w-4 h-4 text-indigo-600" />;
    if (f.includes("team") || f.includes("department"))
      return <Users className="w-4 h-4 text-purple-600" />;
    if (f.includes("posted") || f.includes("deadline"))
      return <Calendar className="w-4 h-4 text-rose-600" />;
    return <Briefcase className="w-4 h-4 text-slate-500" />;
  };

  if (loading) {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-slate-200 rounded-full animate-spin border-t-blue-600"></div>
        {/* Inner pulse ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>
      </div>
      <h2 className="mt-6 text-xl font-semibold text-slate-700">
        Loading Opportunities
      </h2>
      <p className="text-slate-500 mt-1">
        Fetching the latest job postings...
      </p>
    </div>
  );
  };
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>No job postings available.</div>;

  return (
    <div className="min-h-screen bg-slate-50 container mx-auto p-4">
      <header className="mb-6 flex items-center space-x-4">
        <Link to="/" className="text-gray-600 hover:text-gray-800">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Career Opportunities</h1>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {data.map((job, idx) => {
          const jobTitle = job.title || job["Title"] || "Untitled Position";
          const company = job.company || job.Company || "";
          const location = job.location || job.Location || "";
          const link = job.link || job.Link || "";

          // Filter out fields used above for extra info
          const excludeKeys = ["title", "job title", "company", "location", "link"];
          const extraFields = Object.entries(job as Record<string, any>).filter(
  ([key, val]) => val && !excludeKeys.includes(key.toLowerCase())
);

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-200 transition-transform hover:-translate-y-0.5"
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{truncate(jobTitle, 45)}</h3>
                  {company && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{truncate(company, 30)}</span>
                    </div>
                  )}
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-slate-600" />
                </div>
              </div>
              <div className="p-4">
                {location && (
                  <div className="flex items-center gap-3 mb-3 p-3 bg-slate-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm text-slate-700 font-medium">{truncate(location, 35)}</span>
                  </div>
                )}
                <div className="space-y-2 mb-4">
                  {extraFields.map(([field, val], idx2) => (
  <div key={idx2} className="flex gap-3 p-3 bg-slate-50 rounded-lg">
    {getFieldIcon(field)}
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{field}</p>
      <p className="text-sm text-slate-800">{truncate(String(val), 60)}</p>
    </div>
  </div>
))}
                </div>
                <div className="border-t border-slate-100 pt-3">
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm"
                    >
                      View Position <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-400 px-4 py-2 rounded-lg font-medium"
                    >
                      No Link Available
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
