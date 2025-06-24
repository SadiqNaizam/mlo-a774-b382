import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import FunnelChart from '../components/Dashboard/FunnelChart';
import SourcesPieChart from '../components/Dashboard/SourcesPieChart';
import LineChart from '../components/Dashboard/LineChart';
import SummaryGrid from '../components/Dashboard/SummaryGrid';

/**
 * The main dashboard page for the application.
 * 
 * This component serves as the entry point for the dashboard view, composing
 * various data visualization and summary components into a cohesive layout.
 * It utilizes `MainAppLayout` to provide the standard sidebar and header structure,
 * and arranges the dashboard widgets in a responsive grid.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        {/* Header section for the page content, includes tabs and date filter */}
        <PageHeader />
        
        {/* Grid displaying high-level statistics */}
        <StatsCardGrid />
        
        {/* Main grid for detailed charts and data summaries */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Funnel chart and sources pie chart are designed to be side-by-side on large screens */}
          <FunnelChart />
          <SourcesPieChart />
          
          {/* Leads tracking chart and summary grid span the full width of the content area */}
          <LineChart />
          <SummaryGrid />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
