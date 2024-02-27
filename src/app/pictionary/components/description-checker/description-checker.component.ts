import { Component, Input } from '@angular/core';

const PRODUCT_DESCRIPTIONS: Record<string, string> = {
  'Object Centric Data Model (OCDM)': 'The Object Centric Data model acts as an extensible data representation/digital twin of the business containing all of the objects, events and connections.',
  'Knowledge Layer': 'The Celonis Knowledge Layer is the central collection and source of truth of process logic enriched with Celonis’ out-of-the-box intelligence to enable more valuable analysis.',
  'Business Miner': 'Business Miner is a native-built value discovery tool that lets you observe how your process is running, identify opportunities, and size business impact',
  'Celonis Studio': 'The Celonis Studio is the single place within Celonis’ platform for analysts to build- whether it’s analyses, apps or actions.',
  'Process Explorer': 'The Celonis Process Explorer enables users to explore and validate their understanding of processes.',
  'Process Co-pilot': 'Simplify and accelerate insight exploration and analysis creation with Celonis’ AI-assisted explorations.',
  'Execution Apps': 'Compact and targeted pre-built solutions in our core process areas Finance, Procurement & Order Management, such us Open PO Management App, Free-Text Requisition Processing App, System Transformation Readiness App, etc.',
  'Action Flows': 'Integrated, low-code automation feature. Customers can leverage action flows for automation and alert creation with Celonis. However, customers can also decide to use Celonis to trigger other automation solutions.',
  'Business Process Manager (Symbio)': 'Our new process design and governance capabilities: Process Designer to model a full enterprise map of your organization and kickstart your process designs with AI, Process Navigator to enable and onboard your employees with a comprehensive overview of your process landscape and Process Cockpit to integrate process intelligence insights from Celonis into the overview.',
  'Process Adherence Manager': 'The Process Adherence Manager enables integrated mining, modelling and conformance checking within and across processes.',
  'Transformation Hub': 'Celonis Transformation Hub is a centralized tool for tracking, quantifying, and reporting the business impact of Celonis efforts within Celonis.',
  'Intelligence API': 'The intelligence API enables an open and more powerful Celonis platform by creating a developer experience to extend Celonis into 3rd party tools and platforms. It brings the power of Celonis to the systems & tools customers already use. On top, Celonis improved the Developer Experience with comprehensive API documentation.',
  'Orchestration Engine': 'The Emporix Orchestration Engine enables customers to optimize business outcomes through dynamic orchestration of their business processes based on the Celonis Process Intelligence. It drives operational excellence by leveraging Process Intelligence to dynamically start, steer and course correct  processes in real time.',
};

@Component({
  selector: 'pictionary-description-checker',
  templateUrl: './description-checker.component.html',
  styles: [' .modal{background: rgba(0,0,0, .5); } '],
})
export class DescriptionCheckerComponent {
  @Input()
  card: string = '';

  display: string = 'none';

  openModal(): void {
    this.display = 'block';
  }

  getDescription(): string {
    return PRODUCT_DESCRIPTIONS[this.card];
  }

  closeModal(): void {
    this.display = 'none';
  }
}
