import React from 'react';
import { ChevronRight, Calendar, Leaf, Package, Award, Building2, Globe2, Beaker, Star, TrendingUp, ChevronLeft } from 'lucide-react';

// Define Batch interface for batch-specific attributes
interface Batch {
  batchNumber: string;
  harvestDate: string;
  thc: string;
  cbd: string;
  terepenes: number;
  price: number;
  unit: string;
  moq: number;
}

// Define ProductTemplate interface for template-level attributes
interface ProductTemplate {
  thumbnail: string;
  name: string;
  type: string;
  subtype?: string;
  certifications: string[];
  shortDescription: string;
  strainName: string;
  strainType: string | null;
  chemotype: string;
  cultivatorName: string;
  cultivatorCountry: string;
  contractTypes: string[];
  batches: Batch[];
  highlights: {
    type: 'high-thc' | 'high-cbd' | 'high-terpenes' | 'organic' | 'award-winning' | 'rare-strain' | 'popular';
    label: string;
  }[];
}

const ProductListing: React.FC = () => {
  const productTemplates: ProductTemplate[] = [
    {
      thumbnail: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=800",
      name: "Bulk Raw Cannabis Flower - Blue Dream",
      type: "Bulk Raw Cannabis Flower",
      subtype: "",
      certifications: ["GMP", "Organic"],
      shortDescription: "Premium Blue Dream flower with uplifting effects.",
      strainName: "Blue Dream",
      strainType: "Sativa-Dominant Hybrid",
      chemotype: "THC Dominant",
      cultivatorName: "Green Valley Farms",
      cultivatorCountry: "USA",
      contractTypes: ["Recurring Contract", "Single Purchase"],
      batches: [
        {
          batchNumber: "BD-2023-001",
          harvestDate: "10/15/2023",
          thc: "22%",
          cbd: "0.5%",
          terepenes: 21.35,
          price: 4.50,
          unit: "gram",
          moq: 500,
        },
        {
          batchNumber: "BD-2023-002",
          harvestDate: "11/01/2023",
          thc: "21.5%",
          cbd: "0.6%",
          terepenes: 20.80,
          price: 4.75,
          unit: "gram",
          moq: 600,
        },
      ],
      highlights: [
        { type: 'high-thc', label: 'High THC' },
        { type: 'high-terpenes', label: 'Rich Terpene Profile' },
        { type: 'popular', label: 'Best Seller' }
      ],
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=800",
      name: "Full Spectrum CBD Oil",
      type: "Bulk Cannabis Derivatives",
      subtype: "Liquid Infusions",
      certifications: ["EUGMP"],
      shortDescription: "High-potency CBD oil for therapeutic use.",
      strainName: "Charlotte's Web",
      strainType: "Balanced Hybrid",
      chemotype: "CBD Dominant",
      cultivatorName: "HempWorks",
      cultivatorCountry: "Canada",
      contractTypes: ["Single Purchase Contract"],
      batches: [
        {
          batchNumber: "CW-2023-001",
          harvestDate: "09/20/2023",
          thc: "0.3%",
          cbd: "80%",
          terepenes: 21.35,
          price: 50,
          unit: "gram",
          moq: 100,
        },
      ],
      highlights: [
        { type: 'high-cbd', label: 'High CBD' },
        { type: 'organic', label: 'Organic' },
        { type: 'award-winning', label: 'Award-Winning' }
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-[90rem] mx-auto px-4 py-12">
        {/* Enhanced Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Cannabis Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our curated selection of verified cannabis products from trusted cultivators worldwide
          </p>
        </div>

        {/* Enhanced Filters Section */}
        <div className="mb-10 flex gap-4 flex-wrap items-center justify-between bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary bg-white min-w-[200px]">
              <option>All Product Types</option>
              <option>Bulk Raw Cannabis</option>
              <option>Cannabis Derivatives</option>
              <option>Finished Products</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary bg-white min-w-[200px]">
              <option>All Countries</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Netherlands</option>
            </select>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Package className="w-5 h-5" />
            <span className="text-sm">{productTemplates.length} Products Available</span>
          </div>
        </div>

        {/* Product Grid with Enhanced Spacing */}
        <div className="space-y-10">
          {productTemplates.map((template, index) => (
            <ProductTemplateCard key={index} template={template} />
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div className="mt-10 flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Award className="w-4 h-4 text-secondary" />
            Showing {productTemplates.length} verified listings
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button className="px-6 py-2.5 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium flex items-center gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component to render each product template with general info and batch table
const ProductTemplateCard: React.FC<{ template: ProductTemplate }> = ({ template }) => {
  const getHighlightStyles = (type: string) => {
    const styles = {
      'high-thc': {
        bg: 'bg-green-50',
        text: 'text-green-700',
        icon: <Leaf className="w-3.5 h-3.5 text-green-600" />,
        border: 'border-green-200'
      },
      'high-cbd': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        icon: <Beaker className="w-3.5 h-3.5 text-blue-600" />,
        border: 'border-blue-200'
      },
      'high-terpenes': {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        icon: <Beaker className="w-3.5 h-3.5 text-purple-600" />,
        border: 'border-purple-200'
      },
      'organic': {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        icon: <Leaf className="w-3.5 h-3.5 text-emerald-600" />,
        border: 'border-emerald-200'
      },
      'award-winning': {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        icon: <Award className="w-3.5 h-3.5 text-amber-600" />,
        border: 'border-amber-200'
      },
      'rare-strain': {
        bg: 'bg-rose-50',
        text: 'text-rose-700',
        icon: <Star className="w-3.5 h-3.5 text-rose-600" />,
        border: 'border-rose-200'
      },
      'popular': {
        bg: 'bg-indigo-50',
        text: 'text-indigo-700',
        icon: <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />,
        border: 'border-indigo-200'
      }
    };
    return styles[type] || styles['high-thc'];
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="border-b border-gray-100">
        <div className="p-8"> {/* Increased padding for better spacing */}
          <div className="flex flex-col lg:flex-row gap-10"> {/* Increased gap */}
            {/* Enhanced Image Section */}
            <div className="lg:w-72 space-y-6"> {/* Increased width and spacing */}
              <div className="h-72 rounded-xl overflow-hidden shadow-sm"> {/* Increased height */}
                <img 
                  src={template.thumbnail} 
                  alt={template.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Enhanced Product Highlights */}
              <div className="flex flex-wrap gap-2">
                {template.highlights.map((highlight, idx) => {
                  const style = getHighlightStyles(highlight.type);
                  return (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${style.bg} ${style.text} ${style.border} text-sm font-medium shadow-sm`}
                    >
                      {style.icon}
                      {highlight.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Product Details Section */}
            <div className="flex-1 space-y-8"> {/* Increased spacing */}
              {/* Enhanced Header Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-base text-gray-600">
                      {template.type}{template.subtype ? ` - ${template.subtype}` : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl">
                    <Building2 className="w-5 h-5 text-gray-500" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">{template.cultivatorName}</span>
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <Globe2 className="w-3 h-3" />
                        {template.cultivatorCountry}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">{template.shortDescription}</p>
              </div>

              {/* Enhanced Strain Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                  <p className="text-sm text-gray-500 mb-3">Strain Details</p>
                  <p className="font-semibold text-gray-900 text-lg mb-2">{template.strainName}</p>
                  {template.strainType && (
                    <span className="inline-flex px-3 py-1.5 bg-purple-100 text-purple-700 text-sm rounded-lg">
                      {template.strainType}
                    </span>
                  )}
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-500 mb-2">Chemotype</p>
                  <div className="flex items-center gap-2">
                    <Beaker className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-900">{template.chemotype}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="text-sm text-gray-500 mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {template.certifications.map((cert, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        <Award className="w-3 h-3" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Contract Types */}
              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-3">Available Contract Types</p>
                <div className="flex flex-wrap gap-3">
                  {template.contractTypes.map((type, i) => (
                    <span key={i} className="inline-flex items-center px-4 py-2 bg-white text-gray-700 text-sm rounded-xl border border-gray-200 shadow-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Batch Information */}
      <div className="px-8 py-6 bg-gray-50/50">
        <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <Package className="w-5 h-5 text-secondary" />
          Available Batches
        </h4>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-500 uppercase bg-gray-100/50">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Batch Number</th>
                <th className="px-4 py-3">Harvest Date</th>
                <th className="px-4 py-3">THC</th>
                <th className="px-4 py-3">CBD</th>
                <th className="px-4 py-3">Terpenes</th>
                <th className="px-4 py-3">Reserve Price (USD)</th>
                <th className="px-4 py-3 rounded-r-lg">MOQ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {template.batches.map((batch, idx) => (
                <tr key={idx} className="hover:bg-white/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{batch.batchNumber}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      {batch.harvestDate}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600" />
                      {batch.thc}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Beaker className="w-4 h-4 text-blue-600" />
                      {batch.cbd}
                    </div>
                  </td>
                  <td className="px-4 py-3">{batch.terepenes} ug/mg</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    ${batch.price.toFixed(2)}/{batch.unit}
                  </td>
                  <td className="px-4 py-3">{batch.moq.toLocaleString()} {batch.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enhanced Action Footer */}
      <div className="px-8 py-6 bg-white border-t border-gray-100 flex justify-end">
        <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary text-white hover:bg-secondary/90 rounded-xl transition-all text-sm font-medium shadow-sm hover:shadow-md">
          View Complete Listing
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductListing;