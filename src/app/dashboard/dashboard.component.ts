import { Component } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioButton} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

export interface Metrics {
  metric: string;
  title: string;
  assessment: string;
  input: string;
  description: string;
  setting: string;
  object: string;
  property: string;
  output: string;
  field: string;
  standard: string;
  score: string;
}
const ELEMENT_DATA: Metrics[] = [
  {metric: 'Avarage Input Interface Size of Components', title: 'A viewpoint-based evaluation method for future Automotive Architectures', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'E/E-architecture', standard: '', score: '++'},
  {metric: 'Testability Metric', title: 'A viewpoint-based evaluation method for future Automotive Architectures', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Software Defect Proneness', output: 'System', field: 'E/E-architecture', standard: '', score: '++'},
  {metric: 'Cost Function', title: 'A viewpoint-based evaluation method for future Automotive Architectures', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Cost', output: 'System', field: 'E/E-architecture', standard: '', score: '++'},
  {metric: 'Coupling of Components', title: 'A viewpoint-based evaluation method for future Automotive Architectures', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Coupling', output: 'Component', field: 'E/E-architecture', standard: '', score: '++'},
  {metric: 'Score View', title: 'A viewpoint-based evaluation method for future Automotive Architectures', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Cost', output: 'System', field: 'E/E-architecture', standard: '', score: '++'},
  {metric: 'Project Defect Density (PDD)', title: 'Performance Assessment of Traditional Software Development Methodologies and DevOps Automation Culture', assessment: 'Tool', input: 'Test', description: 'Formula', setting: 'Academic', object: 'Open Source', property: 'Defects Debt', output: 'Process', field: 'DevOps', standard: '', score: '+++++'},
  {metric: 'Release Deployment Frequency (RDF)', title: 'Performance Assessment of Traditional Software Development Methodologies and DevOps Automation Culture', assessment: 'Tool', input: 'Deployment', description: 'Formula', setting: 'Academic', object: 'Open Source', property: 'Cost', output: 'Process', field: 'DevOps', standard: '', score: '+++++'},
  {metric: 'Process Productivity (PP)', title: 'Performance Assessment of Traditional Software Development Methodologies and DevOps Automation Culture', assessment: 'Tool', input: 'Requirement', description: 'Formula', setting: 'Academic', object: 'Open Source', property: 'Cost', output: 'Process', field: 'DevOps', standard: '', score: '++++'},
  {metric: 'System Risk Identification (SRI)', title: 'Performance Assessment of Traditional Software Development Methodologies and DevOps Automation Culture', assessment: 'Tool', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Open Source', property: 'Coverage', output: 'Process', field: 'DevOps', standard: '', score: '++++'},
  {metric: 'Software Requirement Coverage', title: 'Measurements of Support Processes: Proposed Improvements on Automotive SPICE PAM V3.1 in Light of OEM Standard Supplier Quality Requirements', assessment: 'Methodology', input: 'Requirement', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coverage', output: 'System', field: 'A-SPICE', standard: '', score: '++'},
  {metric: 'Software Static / Dynamic Code Analysis Coverage Metrics', title: 'Measurements of Support Processes: Proposed Improvements on Automotive SPICE PAM V3.1 in Light of OEM Standard Supplier Quality Requirements', assessment: 'Methodology', input: 'Code', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coverage', output: 'System', field: 'A-SPICE', standard: '', score: '+++'},
  {metric: 'Implemented Software Requirements', title: 'Measurements of Support Processes: Proposed Improvements on Automotive SPICE PAM V3.1 in Light of OEM Standard Supplier Quality Requirements', assessment: 'Methodology', input: 'Requirement', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Coverage', output: 'System', field: 'A-SPICE', standard: '', score: '+'},
  {metric: 'Service Group Interface Count (ic)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Group Local Interface Count (lic)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Cohesion', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Group Interface Exposure Degree (ied)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling, Cohesion', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Group Exposure Count (ec)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Group Required Interfaces Count (ric)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Group Required Groups Count (rgc)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Groups Dependency Intensity (di)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Service Group Reallocation Capacity (rc)', title: 'Playground for Early Automotive Service Architecture Design and Evaluation', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Service-oriented Architectures', standard: '', score: '+++'},
  {metric: 'Coupling between Object Classes (CBO)', title: 'Towards Metics for analyzing System Architectures Modeled with EAST-ADL', assessment: 'Methodology', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'System Architectures modeled with EAST- ADL', standard: '', score: '+'},
  {metric: 'Response for a Class (RFC)', title: 'Towards Metics for analyzing System Architectures Modeled with EAST-ADL', assessment: 'Methodology', input: 'Code', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'System Architectures modeled with EAST- ADL', standard: '', score: '++'},
  {metric: 'Coupling Factor (COF)', title: 'Towards Metics for analyzing System Architectures Modeled with EAST-ADL', assessment: 'Methodology', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'System Architectures modeled with EAST- ADL', standard: '', score: '+'},
  {metric: 'Clustering Factor (CLF)', title: 'Towards Metics for analyzing System Architectures Modeled with EAST-ADL', assessment: 'Methodology', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'System Architectures modeled with EAST- ADL', standard: '', score: '+'},
  {metric: 'Defect Debt Trend', title: 'Improved Technique for Measuring the Number of Defects in Automotive Agile SW Development Defect debt trend', assessment: 'Methodology', input: 'Test', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Defects Debt', output: 'Process', field: 'Agile SW Development', standard: '', score: '+++'},
  {metric: 'Traced Components per Requirement (CR)', title: 'Traceability Metrics as Early Predictors of Software Defects?', assessment: 'Framework', input: 'Requirement', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Software Defect Proneness', output: 'Component', field: 'Cross-cutting requirements', standard: '', score: '+++'},
  {metric: 'Traced Requirements per Component (RC)', title: 'Traceability Metrics as Early Predictors of Software Defects?', assessment: 'Framework', input: 'Requirement', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Software Defect Proneness', output: 'Component', field: 'Cross-cutting requirements', standard: '', score: '+++'},
  {metric: 'Cost of the architecture (perspective)', title: 'Cyber–Physical Codesign at the Functional Level for Multidomain Automotive Systems', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Cost', output: 'System', field: 'Functional model of cyber-physical systems', standard: '', score: '++'},
  {metric: 'Cost of the architecture (robustness)', title: 'Cyber–Physical Codesign at the Functional Level for Multidomain Automotive Systems', assessment: 'Framework', input: 'Requirement', description: 'Formula', setting: 'Academic', object: 'Proprietary', property: 'Cost', output: 'System', field: 'Functional model of cyber-physical systems', standard: '', score: '++'},
  {metric: 'Functional Safety Requirements and Safety Goals', title: 'Metrics design for safety assessment', assessment: 'Framework', input: 'Requirement', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Software Defect Proneness', output: 'Process', field: 'nan', standard: '', score: '++'},
  {metric: 'Number of functional safety requirements', title: 'Metrics design for safety assessment', assessment: 'Framework', input: 'Requirement', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Software Defect Proneness', output: 'Process', field: 'nan', standard: '', score: '++'},
  {metric: 'Average function interaction within a component', title: 'Metrics for Verification and Validation of Architecture in Powertrain Software Development', assessment: 'Methodology', input: 'Code', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Cohesion', output: 'Component', field: 'Hybrid control software ', standard: '', score: '+++'},
  {metric: 'Number of requirements associated with a software component', title: 'Metrics for Verification and Validation of Architecture in Powertrain Software Development', assessment: 'Methodology', input: 'Requirement', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Cohesion', output: 'Component', field: 'Hybrid control software ', standard: '', score: '+'},
  {metric: 'Number of functions per software components component', title: 'Metrics for Verification and Validation of Architecture in Powertrain Software Development', assessment: 'Methodology', input: 'Architecture', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Cohesion', output: 'Component', field: 'Hybrid control software ', standard: '', score: '+'},
  {metric: 'average output interface size', title: 'Metrics for Verification and Validation of Architecture in Powertrain Software Development', assessment: 'Methodology', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'Hybrid control software ', standard: '', score: '++'},
  {metric: 'average input interface size', title: 'Metrics for Verification and Validation of Architecture in Powertrain Software Development', assessment: 'Methodology', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'Hybrid control software ', standard: '', score: '++'},
  {metric: 'Number of Elements', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Complexity', output: 'System', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '++'},
  {metric: 'Element Hiding Factor (EHF)', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Complexity, Cohesion', output: 'Component', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '+++'},
  {metric: 'Fan In / Fan Out ( FI/FO)', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '+++'},
  {metric: 'Range of Demeter (DoR)', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'System', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '+++'},
  {metric: 'Halstead Volume (HV)', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '+++'},
  {metric: 'Tight Block Cohesion (TBC) ', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Cohesion', output: 'Components Relationship', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '+++'},
  {metric: 'Loose Block Cohesion (LBC)', title: 'On Bringing Object-Oriented Software Metrics into the Model-Based World – Verifying ISO 26262 Compliance in Simulink', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Cohesion', output: 'Components Relationship', field: 'Dataflow-oriented software architectures used in model-driven processes', standard: '', score: '+++'},
  {metric: 'Single Component', title: 'Measuring the impact of changes to the complexity and coupling properties of automotive software systems', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'Distributed software system', standard: '', score: '+++'},
  {metric: 'Component Complexity', title: 'Measuring the impact of changes to the complexity and coupling properties of automotive software systems', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Complexity', output: 'Component', field: 'Distributed software system', standard: '', score: '+++'},
  {metric: 'Package Coupling Coup', title: 'Measuring the impact of changes to the complexity and coupling properties of automotive software systems', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Distributed software system', standard: '', score: '+++'},
  {metric: 'Package Coupling Metrics (PCM)', title: 'Measuring the impact of changes to the complexity and coupling properties of automotive software systems', assessment: 'Framework', input: 'Architecture', description: 'Formula', setting: 'Industrial', object: 'Proprietary', property: 'Coupling', output: 'Components Relationship', field: 'Distributed software system', standard: '', score: '+++'},
  {metric: 'Process-Family-Points (PFP)', title: 'Process-Family-Points', assessment: 'Methodology', input: 'Requirement', description: 'Textual', setting: 'Industrial', object: 'Proprietary', property: 'Cost', output: 'Process', field: 'Software system families', standard: '', score: '+'},


];
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatFormField, MatSelect, MatOption, MatSelectModule, MatFormFieldModule, MatRadioButton, MatButton, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements AfterViewInit{
  selected = 'none';
  displayedColumns: string[] = ['metric', 'title', 'assessment', 'input','description','setting', 'object', 'property', 'output', 'field', 'standard', 'score'];
  prova = ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.prova);
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  filterMetrics(searchTerm: string): void {
    this.prova = this.prova.filter(item =>
      Object.values(item).some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    console.log(this.prova);
    this.dataSource = new MatTableDataSource(this.prova);
  }

  resetFilter(){
    this.prova = ELEMENT_DATA;
    this.dataSource = new MatTableDataSource(this.prova);

  }


  test(selected: string){
    this.selected = selected;
    console.log(selected);
    console.log(typeof ELEMENT_DATA);
  }


  /** Announce the change in sort state for assistive technology. */

}

